import { of, from } from 'rxjs';
import { expect } from 'chai';
//import * as sinon from 'sinon';
import { HeroesDashboardComponent } from './heroes-dashboard.component';
import { HeroModel } from '../../../models/hero.model';
var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

describe('Heroes Dashboard Component', () => {

    let componentToTest: HeroesDashboardComponent;

    let mocks = {
        store: {
          dispatch: sinon.stub(),
          select: sinon.stub()
        }
    };

    beforeEach(() => {
        componentToTest = new HeroesDashboardComponent(<any> mocks.store);
    });

    describe('ngOnInit()',  () => {
        
        it('should initialize heroes list', () => {
            const heroes: HeroModel[] = [
                {
                    "_name":"Anthony Stark",
                    "_id": 1,
                    "_height":"6.1",
                    "_picture":"http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
                    "_nickname":"Iron Man",
                    "_power": "Armor"
                },
                {
                    "_name":"Peter Parker",
                    "_id": 2,
                    "_height":"5.1",
                    "_picture":"http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg",
                    "_nickname":"Spider-Man",
                    "_power": "SpiderWeb"
                }
            ];

            mocks.store.select.returns(of(heroes));

            componentToTest.ngOnInit();

            expect(componentToTest.heroes).to.be.eql(heroes);

        });

        it('should dispatch Load Heroes action', () => {
            componentToTest.ngOnInit();
            expect(mocks.store.dispatch).called;
          });
    });

    
});
