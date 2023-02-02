const skills = [
    {id: 112452, skill: 'HTML', started: true},
    {id: 212356, skill: 'CSS', started: true},
    {id: 312467, skill: 'Javascript', started: true},
    {id: 412758, skill: 'Nope.js', started: true},
    {id: 509870, skill: 'Python', started: false}
  ];
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
	
  function update(id, updatedSkill) {
    req.body.done = !!req.body.done;
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
      // Finde the index of the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    //add the id
    skill.id  = Date.now() % 1000000;
    skill.started = true;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }
