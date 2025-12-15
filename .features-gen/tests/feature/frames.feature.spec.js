// Generated from: tests\feature\frames.feature
import { test } from "playwright-bdd";

test.describe('frames', () => {

  test('different kind of action', { tag: ['@regression'] }, async ({ Given, page }) => { 
    await Given('framestab', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\feature\\frames.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given framestab","stepMatchArguments":[]}]},
]; // bdd-data-end