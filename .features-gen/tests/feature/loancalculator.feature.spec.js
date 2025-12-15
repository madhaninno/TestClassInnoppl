// Generated from: tests\feature\loancalculator.feature
import { test } from "playwright-bdd";

test.describe('loancalculator', () => {

  test('different kind of action', { tag: ['@smoke'] }, async ({ Given, page }) => { 
    await Given('singleAcc', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\feature\\loancalculator.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given singleAcc","stepMatchArguments":[]}]},
]; // bdd-data-end