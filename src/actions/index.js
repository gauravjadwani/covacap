import {
  database
}
from '../firebase';
export const LOAD_FIREBASE_DATA = () => {

  return (dispatch) => {
    const ref = database.ref("VDEALS");
    let tilesobject = [];
    ref.once("value").then(function(snapshot) {
      let obj = snapshot.val();

      var parent = [];
      var child = [];
      var holder = [];
      var id = 0;

      for (var i = 0; i < obj.length; i++) {
        if (obj[i]['CONTROL'] === 'Y') {
          parent[obj[i]['PKEY']] = obj[i];
        } else {
          if (!child[obj[i]['PKEY']])
            child[obj[i]['PKEY']] = [];
          child[obj[i]['PKEY']].push(obj[i]);
        }
      }
      for (obj in parent) {
        if (obj in child) {
          if (!parent[obj]['expand']) {
            parent[obj]['expand'] = [];
          }
          for (var val in child[obj]) {
            child[obj][val]['id'] = id++;
            parent[obj]['expand'].push(child[obj][val]);
          }

        }
      }
      for (obj in parent) {
        parent[obj]['id'] = id++;
        holder.push(parent[obj]);
      }

      dispatch({
        type: 'LOAD_FIREBASE_DATA',
        payload: holder
      });
    })

  }
}
