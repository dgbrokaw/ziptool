const fs = require('fs');
const { expect } = require('chai');
const rimraf = require('rimraf');
const { zip } = require('../src/index.js');

describe('ziptool', () => {
  // Clean and create tmp dir and files
  before(() => {
    rimraf.sync('tmp');
    fs.mkdirSync('tmp');
    fs.writeFileSync('tmp/foo.txt', 'foo');
    fs.writeFileSync('tmp/bar.txt', 'bar');
  });

  // Remove the tmp directory
  after(() => {
    rimraf.sync('tmp');
  });

  describe('#zip()', () => {
    it('should zip a file', (done) => {
      zip('tmp/foo.txt', 'tmp/foo.zip', (err) => {
        expect(err).to.be.null;
        expect(fs.existsSync('tmp/foo.zip')).to.be.true;
        done();
      });
    });

    it('should zip multiple files', (done) => {
      zip(['tmp/foo.txt', 'tmp/bar.txt'], 'tmp/foobar.zip', (err) => {
        expect(err).to.be.null;
        expect(fs.existsSync('tmp/foobar.zip')).to.be.true;
        done();
      });
    });
  });
});
