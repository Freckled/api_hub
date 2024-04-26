const Questionnaire = require('../models/questionaire.model')
const Answer = require('../models/answer.model')

// Controller functions for handling CRUD operations
const questionnaireController = {
    // Create a new questionnaire
    createQuestionnaire: async (req, res) => {
        try {
            const newQuestionnaire = new Questionnaire(req.body);
            await newQuestionnaire.save();
            res.status(201).json(newQuestionnaire);
        } catch (error) {
            console.error('Error creating questionnaire:', error);
            res.status(500).json({ error: 'Failed to create questionnaire' });
        }
    },

    // Get all questionnaires
    getAllQuestionnaires: async (req, res) => {
        try {
            const questionnaires = await Questionnaire.find();
            res.json(questionnaires);
        } catch (error) {
            console.error('Error fetching questionnaires:', error);
            res.status(500).json({ error: 'Failed to fetch questionnaires' });
        }
    },

    // Get a specific questionnaire by ID
    getQuestionnaireById: async (req, res) => {
        const { id } = req.params;
        try {
            const questionnaire = await Questionnaire.findById(id);
            if (!questionnaire) {
                return res.status(404).json({ error: 'Questionnaire not found' });
            }
            res.json(questionnaire);
        } catch (error) {
            console.error('Error fetching questionnaire:', error);
            res.status(500).json({ error: 'Failed to fetch questionnaire' });
        }
    },

    // Create a new answer
    createAnswer: async (req, res) => {
        try {
            const newAnswer = new Answer(req.body);
            await newAnswer.save();
            res.status(201).json(newAnswer);
        } catch (error) {
            console.error('Error creating answer:', error);
            res.status(500).json({ error: 'Failed to create answer' });
        }
    },

    // Get all answers
    getAllAnswers: async (req, res) => {
        try {
            const answers = await Answer.find();
            res.json(answers);
        } catch (error) {
            console.error('Error fetching answers:', error);
            res.status(500).json({ error: 'Failed to fetch answers' });
        }
    }
    // Add more controller functions for update, delete, etc. as needed
};

module.exports = questionnaireController;