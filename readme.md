[![Build Status](https://travis-ci.org/joymon/travis-ci-test.svg)](https://travis-ci.org/joymon/travis-ci-test)

# Test project for Travis-CI CI & CD

This is to show that how a pure browser based HTML+JS application can leverage the CI&CD using Travis-CI. After every check-in
- Travis container kicks up
- It runs JavaScript tests written using Jasmine
- If those tests are success, it deploy to web site via FTP
- The deployment location is [http://joymononline.in/tests/travis-ci-test/karel.htm](http://joymononline.in/tests/travis-ci-test/karel.htm)

All these CI & CD activities are free. Obvioulsy there is cost in hosting space of www.joymononline.in. If its Google App Engine or free Azure account, hosting too comes in free

`This was really useful. As GitHub actions works great planning to move there to reduce number of dependencies. Absolutely there is no issue with Travis-CI`
