// Generated from: tests\feature\demoqasite.feature
import { test } from "playwright-bdd";

test.describe('demoqasite', () => {

  test('different kind of action', { tag: ['@testfile'] }, async ({ Given }) => { 
    await Given('add text field'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\feature\\demoqasite.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@testfile"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given add text field","stepMatchArguments":[]}]},
]; // bdd-data-end