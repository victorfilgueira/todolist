package com.simonassi.todolistnative

import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.action.ViewActions.typeText
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withId
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.simonassi.todolistnative.ui.MainActivity
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith


@RunWith(AndroidJUnit4::class)
class TodoListInstrumentedTest {

    @get:Rule
    val activityRule = ActivityScenarioRule(MainActivity::class.java)

    @Test
    fun shouldRenderEmptyListInfo() {
        onView(withId(R.id.listEmptyContainer)).check(matches(isDisplayed()))
    }

    @Test
    fun shouldRenderListInfo() {
        onView(withId(R.id.todoInputText)).perform(typeText("Tarefa 1"))
        onView(withId(R.id.addTodoBtn)).perform(click())
        onView(withId(R.id.listContainer)).check(matches(isDisplayed()))
    }

    @Test
    fun shouldRenderNumberOfTasks() {
        val taskNumber = 10
        for (i in 1..taskNumber){
            onView(withId(R.id.todoInputText)).perform(typeText("Tarefa $i"))
            onView(withId(R.id.addTodoBtn)).perform(click())
        }

        onView(withId(R.id.tvShowCreated)).check(matches(withText(taskNumber.toString())))
    }
}