function toggleStatus(button) {
  const isDone = button.classList.contains('btn-outline-success');

  if (isDone) {
    button.classList.remove('btn-outline-success');
    button.classList.add('btn-outline-danger');
    button.innerHTML = '❌ لم يتم';
  } else {
    button.classList.remove('btn-outline-danger');
    button.classList.add('btn-outline-success');
    button.innerHTML = '✅ تم التلقيح';
  }
}