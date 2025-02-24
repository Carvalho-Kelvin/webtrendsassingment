const habitInput = document.getElementById('habitInput');
const addHabitBtn = document.getElementById('addHabitBtn');
const habitList = document.getElementById('habitList');
// Add Task
addTaskBtn.addEventListener('click', () => {
 const habit = taskInput.value.trim();
 if (habit) {
 const li = document.createElement('li');
 li.habitContent = habit;
 habitList.appendChild(li);
 habitInput.value = '';
 }
});
// Remove Habit on Click
habitList.addEventListener('click', (e) => {
 if (e.target.tagName === 'LI') {
 e.target.remove();
 }
});