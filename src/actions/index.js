import {db} from '.././firebase';

// Add an Item
export function postExpense(payee, amount, category, comment){
  return dispatch => {
    //var ref = firebase.database().ref('expenses').push();
    var ref = db.collection("expenses");
    // var id = ref.key;
    ref.add(
      {
        payee: payee,
        amount: amount,
        category: category,
        comments: comment,
        date_added: new Date()
      }
    )
  }
}

// Remove an item
export const removeExpense = (key) => {
  let keyToRemove = key;
  return dispatch => {
    var db = firebase.database().ref('expenses');
    db.orderByChild('id').equalTo(keyToRemove).once('value', snapshot => {
      let updates = {};
      snapshot.forEach(child => updates[child.key] = null);
      db.update(updates);
    });
  }
}