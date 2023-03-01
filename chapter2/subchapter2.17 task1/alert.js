function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Are you agree?",
  () =>  alert("You agreed.") ,
  () => alert("You canceled.") 
);