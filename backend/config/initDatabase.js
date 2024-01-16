import mainRequest from '../models/mainRequest.js';
import preRequest from '../models/preRequest.js';
import professor from '../models/professor.js';
import registrationSession from '../models/registrationSession.js';
import student from '../models/student.js';

async function initDatabase() {
	professor.hasMany(student, { foreignKey: 'assignedProfessorId' });
	student.belongsTo(professor, { foreignKey: 'assignedProfessorId' });

	student.hasMany(preRequest, { foreignKey: 'studentId' });
	preRequest.belongsTo(student, { foreignKey: 'studentId' });

	registrationSession.hasMany(preRequest, { foreignKey: 'sessionId' });
	preRequest.belongsTo(registrationSession, { foreignKey: 'sessionId' });

	professor.hasMany(registrationSession, { foreignKey: 'professorId' });
	registrationSession.belongsTo(professor, { foreignKey: 'professorId' });

	professor.hasMany(mainRequest, { foreignKey: 'professorId' });
	mainRequest.belongsTo(professor, { foreignKey: 'professorId' });

	student.hasOne(mainRequest, { foreignKey: 'studentId' });
	mainRequest.belongsTo(student, { foreignKey: 'studentId' });
}

export default initDatabase;
