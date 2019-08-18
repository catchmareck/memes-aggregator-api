'use strict';

const AWS = require('aws-sdk');
const { region } = require('../config');

class MemesController {
    
    constructor(request, response) {
        
        this.request = request;
        this.response = response;
        
        this.dynamoDb = new AWS.DynamoDB({ region });
    }
    
    fetchAll() {
        
        return this.dynamoDb.scan({
            TableName: 'Memes',
            Select: 'ALL_ATTRIBUTES'
        }).promise();
    }
}

module.exports = MemesController;
