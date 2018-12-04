"use strict";

const prefixes = [
  'First',
  'First',
  'New',
  'United',
  'Metropolitan',
  'Second',
  'Central',
  'Our Savior\'s',
];

const names = [
  'Church', 
  'Church', 
  'Church', 
  'Church',
  'Church',
  'Church',
  'Church',
  'Church',
  'Church',
  'Chapel', 
  'Fellowship',
  'Assembly',
  'Ministry',
  'Ministries',
  'Tabernacle',
  'Temple',
];

const adjectives = [
  'Freewill',
  'Life', 
  'Cross', 
  'Journey', 
  'Generation', 
  'Redemption', 
  'Redeemer', 
  'Impact',
  'Transformation', 
  'Summit', 
  'Community', 
  'Bible',
  'Shepherd',
  'Christian',
  'Trinity',
  'Hope',
  'Zion',
  'Hill',
  'Grace',
  'Covenant',
  'Victory',
  'Apostolic',
  'International',
  'Good',
  'Light',
  'Gospel',
  'Grove',
  'Outreach',
  'Lighthouse',
  'Family',
  'Prayer',
  'Lake',
  'Harvest',
  'Salvation',
  'River',
  'Friendship',
  'Springs',
  'Cornerstone',
  'Calvary',
  'Congregational',
  'Holy',
  'Sacred',
  'Revelation',
  'Faith',
  'Providence',
];

const adverbs = [
  'Greater',
  'Holy',
]

const denominations = [
  'Lutheran', 
  'Presbyterian',
  'Evangelical', 
  'Reformed',
  'Baptist',
  'Methodist',
  'Pentcostal',
  'Episcopal',
];

const suffixes = [
  'Of God',
  'Of The Nazarene',
  'Of Prophecy',
  'Of Christ',
  'Of Jesus Christ',
  'Of Jesus',
  'Of The Good Shepherd',
  'On The Rock',
  'Of The Valley',
  'Of The Resurrection',
  'Of The Holy Spirit',
  'Of The Redeemer',
]

const append = (n, val, reducer) => Array(n).fill().reduce(reducer, val);
const deduped = x => [...new Set(x)];

const randomInt = (max) => Math.floor(Math.random() * max);
const randomIntInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const randomFrom = (items) => items[randomInt(items.length)];
const randomBool = () => Math.random() >= 0.5;
const chance = (percent) => Math.random() <= percent;

const withMaybePrefix = (val) => chance(0.16) ? val.concat(randomFrom(prefixes)) : val;
const withAdjectives = (n, val) => append(n, val, (prev, _) => prev.concat(randomFrom(adjectives)));
const withName = (val) => val.concat(randomFrom(names));
const withMaybeDenomination = (val) => chance(0.44) ? val.concat(randomFrom(denominations)) : val;
const withMaybeSuffix = (val) => chance(0.13) ? val.concat(randomFrom(suffixes)) : val;
const createName = () => 
  deduped(
    withMaybeSuffix(
      withName(
        withAdjectives(randomIntInRange(1, 3), 
          withMaybeDenomination(
            withMaybePrefix(new Array()))))))
              .join(' ');

window.onload = () => document.getElementById('church-name').textContent = createName();