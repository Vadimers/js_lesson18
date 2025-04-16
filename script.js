import { curriedAdd } from './curriedAdd.js';
import { curriedDomain } from './curriedDomain.js';
import { originalFunction, modifyFunction } from './modifyFunction.js';
import { outerFunction } from './nestedFunctions.js';

// Curried Add
document.getElementById('curriedAddForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const a = Number(formData.get('a'));
  const b = Number(formData.get('b'));
  const c = Number(formData.get('c'));
  const result = curriedAdd(a)(b)(c);
  document.getElementById('curriedAddResult').textContent = result;
});

// Curried Domain
document.getElementById('curriedDomainForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const protocol = formData.get('protocol');
  const domainName = formData.get('domainName');
  const tld = formData.get('tld');
  const result = curriedDomain(protocol)(domainName)(tld);
  document.getElementById('curriedDomainResult').textContent = result;
});

// Modify Function
document.getElementById('modifyFunctionForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const num = Number(formData.get('num'));
  const multiplier = Number(formData.get('multiplier'));
  const modifiedFunc = modifyFunction(originalFunction, multiplier);
  document.getElementById('originalResult').textContent = originalFunction(num);
  document.getElementById('modifiedResult').textContent = modifiedFunc(num);
});

// Nested Functions
document.getElementById('nestedFunctionsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const arg1 = Number(formData.get('arg1'));
  const arg2 = Number(formData.get('arg2'));
  const arg3 = Number(formData.get('arg3'));
  const result = outerFunction(arg1)(arg2)(arg3);
  document.getElementById('nestedFunctionsResult').textContent = result;
});