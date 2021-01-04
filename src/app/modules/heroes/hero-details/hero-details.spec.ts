import { of, from } from 'rxjs';
import { expect } from 'chai';
//import * as sinon from 'sinon';
import { HeroModel } from '../../../models/hero.model';
import { HeroDetailsComponent } from './hero-details.component';
var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

describe('Hero Details Component', () => {

    let componentToTest: HeroDetailsComponent;

    let mocks = {
        route:{
            paramMap: sinon.stub()
        },
        heroesService:{
            getHeroById: sinon.stub()
        },
        store: {
          dispatch: sinon.stub(),
          select: sinon.stub()
        },
        router: {
            navigate: sinon.stub()
        },
        heroNamevalidators: {
            nameValidator: sinon.stub()
        },
        heroHeightvalidators:{
            heightNumber: sinon.stub()
        }

    };

    beforeEach(() => {
        componentToTest = new HeroDetailsComponent(
            <any> mocks.route,
            <any> mocks.heroesService,
            <any> mocks.store,
            <any> mocks.router,
            <any> mocks.heroNamevalidators,
            <any> mocks.heroHeightvalidators);
    });

    describe('ngOnInit()',  () => {
        
        it('should init data needed for component', () => {
            componentToTest.createForm = sinon.stub();
            componentToTest.ngOnInit();
            expect(componentToTest.createForm).calledOnce;
        });
    });

    describe('createForm()', () => {
        it('should init the hero details form', () => {
    
          componentToTest.createForm();
    
          expect(componentToTest.form.controls._nickname).not.to.be.undefined;
          expect(componentToTest.form.controls._name).not.to.be.undefined;
          expect(componentToTest.form.controls._height).not.to.be.undefined;
          expect(componentToTest.form.controls._rating).not.to.be.undefined;
          expect(componentToTest.form.controls._power).not.to.be.undefined;
        });
    });


});