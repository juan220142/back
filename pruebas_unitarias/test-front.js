require('chromedriver')
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')


describe('circulo-bueno', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('circulo-bueno', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(3) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("8")
        await driver.findElement(By.css("button:nth-child(3)")).click()
        await driver.findElement(By.css(".base")).click()
        await driver.findElement(By.css("button:nth-child(1)")).click()
        {
            const element = await driver.findElement(By.css("button:nth-child(1)"))
            //await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
    })
})
describe('circulo-negativo', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('circulo-negativo', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(3) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("-5")
        await driver.findElement(By.css("button:nth-child(3)")).click()
        await driver.findElement(By.css(".base")).click()
        await driver.findElement(By.css("button:nth-child(1)")).click()
    })
})
describe('factorial-bien', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('factorial-bien', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.id("fact")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("100")
        await driver.findElement(By.css("button:nth-child(3)")).click()
        await driver.findElement(By.css("button:nth-child(1)")).click()
        await driver.findElement(By.id("fact")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("150")
        await driver.findElement(By.css("button:nth-child(3)")).click()
        await driver.findElement(By.id("root")).click()
        await driver.findElement(By.css("button:nth-child(1)")).click()
        {
            const element = await driver.findElement(By.css("button:nth-child(1)"))
          //  await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
    })
})
describe('factorial-negativo', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('factorial-negativo', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.id("fact")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("-5")
        await driver.findElement(By.css("button:nth-child(3)")).click()
    })
})
describe('faltan-datos-circulo', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('faltan-datos-circulo', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(3) > button")).click()
        await driver.findElement(By.css("button:nth-child(3)")).click()
        await driver.findElement(By.css("button:nth-child(1)")).click()
    })
})
describe('faltan-datos-rectangulo', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('faltan-datos-rectangulo', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(5) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("1")
        await driver.findElement(By.css("button:nth-child(3)")).click()
    })
})
describe('faltan datos-triangulo', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('faltan datos-triangulo', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(4) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("2")
        await driver.findElement(By.name("ins")).click()
        await driver.findElement(By.name("ins")).sendKeys("3")
        await driver.findElement(By.css("button:nth-child(4)")).click()
    })
})
describe('fib-bueno', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('fib-bueno', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(2) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("8")
        await driver.findElement(By.css("button:nth-child(3)")).click()
        await driver.findElement(By.css(".base2")).click()
        await driver.findElement(By.css(".base2")).click()
        await driver.findElement(By.css("button:nth-child(1)")).click()
    })
})
describe('fib-negativo', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('fib-negativo', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(2) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("-7")
        await driver.findElement(By.css("button:nth-child(3)")).click()
        await driver.findElement(By.css("form")).click()
        await driver.findElement(By.css(".base2")).click()
        await driver.findElement(By.css("button:nth-child(1)")).click()
        {
            const element = await driver.findElement(By.css("button:nth-child(1)"))
           // await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
    })
})
describe('rectangulo-bueno', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('rectangulo-bueno', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(5) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("8")
        await driver.findElement(By.name("insta")).click()
        await driver.findElement(By.name("insta")).sendKeys("7")
        await driver.findElement(By.css("button:nth-child(3)")).click()

    })
})
describe('rectangulo-negativo', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('rectangulo-negativo', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(5) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("-5")
        await driver.findElement(By.name("insta")).click()
        await driver.findElement(By.name("insta")).sendKeys("6")
        await driver.findElement(By.css("button:nth-child(3)")).click()
        await driver.findElement(By.css("form > div:nth-child(2)")).click()
        await driver.findElement(By.css(".base")).click()
        await driver.findElement(By.css("button:nth-child(1)")).click()
    })
})
describe('triangulo-bueno', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('triangulo-bueno', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 1936, height: 1048 })
        await driver.findElement(By.css("a:nth-child(4) > button")).click()
        await driver.findElement(By.css(".div1")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("6")
        await driver.findElement(By.name("ins")).click()
        await driver.findElement(By.name("ins")).sendKeys("5")
        await driver.findElement(By.name("inst")).click()
        await driver.findElement(By.name("inst")).sendKeys("5")
        await driver.findElement(By.css("button:nth-child(4)")).click()
        await driver.findElement(By.css(".base")).click()
    })
})
describe('triangulo-lados no concordantes', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('triangulo-lados no concordantes', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(4) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("10")
        await driver.findElement(By.name("ins")).click()
        await driver.findElement(By.name("ins")).sendKeys("1")
        await driver.findElement(By.name("inst")).click()
        await driver.findElement(By.name("inst")).sendKeys("1")
        await driver.findElement(By.css("button:nth-child(4)")).click()
    })
})
describe('triangulo-negativo', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('triangulo-negativo', async function() {
        await driver.get("https://finalimplementacionjfcr.herokuapp.com/")
        await driver.manage().window().setRect({ width: 945, height: 1012 })
        await driver.findElement(By.css("a:nth-child(4) > button")).click()
        await driver.findElement(By.name("inp")).click()
        await driver.findElement(By.name("inp")).sendKeys("-3")
        await driver.findElement(By.name("ins")).click()
        await driver.findElement(By.name("ins")).sendKeys("-2")
        await driver.findElement(By.name("inst")).click()
        await driver.findElement(By.name("inst")).sendKeys("1")
        await driver.findElement(By.css("button:nth-child(4)")).click()
        await driver.findElement(By.css("button:nth-child(1)")).click()
    })
})
