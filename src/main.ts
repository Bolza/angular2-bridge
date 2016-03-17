import 'zone.js';
import 'reflect-metadata';
import {Component} from 'angular2/core';
import {UpgradeAdapter} from 'angular2/upgrade';
import {bootstrap} from 'angular2/platform/browser';
import * as angular from 'angular';
const upgradeAdapter = new UpgradeAdapter();

var app = angular.module('ExampleModule', []);

// olNavBar NG2 -> NG1 //
import {SomeComponent} from '/ng2/someComponent';
app.directive('someComponent', upgradeAdapter.downgradeNg2Component(SomeComponent));

import {Bridge} from '/bridge/bridge';
upgradeAdapter.addProvider(Bridge);
app.factory('Bridge', upgradeAdapter.downgradeNg2Provider(Bridge))

// bootstrapping the app with NG2
upgradeAdapter.bootstrap(document.body, ['ExampleModule']);
