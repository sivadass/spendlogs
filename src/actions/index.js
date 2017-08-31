import firebase from 'firebase';

// Add an Item
export function postExpense(payee, amount, category, comment){
  return dispatch => {
    var ref = firebase.database().ref('expenses').push();
    var id = ref.key;
    ref.set(
      {
        id: id,
        payee: payee,
        amount: amount,
        category: category,
        comment: comment,
        date: firebase.database.ServerValue.TIMESTAMP
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