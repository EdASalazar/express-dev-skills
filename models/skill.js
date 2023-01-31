const skills = [
    {id: 1, skill: 'HTML', started: true},
    {id: 2, skill: 'CSS', started: true},
    {id: 3, skill: 'Javascript', started: true}
    {id: 4, skill: 'Nope.js', started: true}
    {id: 5, skill: 'Python', started: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
  }