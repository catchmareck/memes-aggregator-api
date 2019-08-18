'use strict';

const sinon = require('sinon');
const { expect } = require('chai');

const MemesController = require('../../app/controllers/memes');

let controller = null;
let sandbox;

describe('Controller: Memes', () => {

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    before(() => {

        controller = new MemesController({ body: {} }, {});
    });

    after(() => {

        controller = null;
    });

    describe('should have properties', function () {

        it('request', function () {

            expect(controller).to.have.property('request');
        });
        
        it('response', function () {

            expect(controller).to.have.property('response');
        });

        it('dynamoDb', function () {

            expect(controller).to.have.property('dynamoDb');
        });
    });

    it('should fetch all urls', async function () {
        
        const fakeScanResult = {
            
            promise: sandbox.stub().resolves({ Items: [] })
        };
        const scanStub = sandbox.stub(controller.dynamoDb, 'scan').returns(fakeScanResult);
        const result = await controller.fetchAll();
        
        expect(scanStub.called).to.be.true;
        expect(fakeScanResult.promise.called).to.be.true;
        expect(result).to.have.property('Items');
        expect(result.Items).to.be.an('array');
    });
});
