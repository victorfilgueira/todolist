const { remote } = require('webdriverio');

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554',
    'appium:appPackage': 'com.simonassi.todolistnative',
    'appium:appActivity': '.ui.MainActivity',
};

const wdOpts = {
    hostname: '0.0.0.0',
    port: 4723,
    logLevel: 'info',
    path: '/wd/hub',
    capabilities,
};

const shouldRenderEmptyListInfo = async () => {
    const driver = await remote(wdOpts);
    try {
        const emptyItem = await driver.$('//*[@text="Você ainda não tem tarefas cadastradas"]');
        await emptyItem.isDisplayed();
    } finally {
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

const shouldRenderListInfo = async () => {
    const driver = await remote(wdOpts);
    const newTask = 'Tarefa 1';
    try {
        const inputText = await driver.$('//android.widget.EditText[@resource-id="com.simonassi.todolistnative:id/todoInputText"]');
        await inputText.setValue(newTask);
        const addTodoBtn = await driver.$('//android.widget.Button[@content-desc="TodoListNative"]');
        await addTodoBtn.click();
        driver.pause(1000);
        await inputText.setValue('');
        const addedTask = await driver.$(`//*[@text="${newTask}"]`);
        await addedTask.isDisplayed();
    } finally {
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

const shouldRenderNumberOfTasks = async () => {
    const driver = await remote(wdOpts);
    const taskNumber = 10;
    try {
        for (let i = 1; i <= taskNumber; i++) {
            const inputText = await driver.$('//android.widget.EditText[@resource-id="com.simonassi.todolistnative:id/todoInputText"]');
            await inputText.setValue(`Tarefa ${i}`);
            const addTodoBtn = await driver.$('//android.widget.Button[@content-desc="TodoListNative"]');
            await addTodoBtn.click();
        }
        const tvShowCreated = await driver.$('//android.widget.TextView[@resource-id="com.simonassi.todolistnative:id/tvShowCreated"]');
        await tvShowCreated.isDisplayed();
    } finally {
        await driver.pause(1000);
        await driver.deleteSession();
    }
}


const runTests = async () => {
        await shouldRenderEmptyListInfo();
        await shouldRenderListInfo();
        await shouldRenderNumberOfTasks();
}

runTests();