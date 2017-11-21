## Task 1: Add the ability to delete items.

Deleting an item means mutating app's state. The state of our app is managed by Redux, which means we'll need to introduce a new action, a new action creator function and update the reducer function.

Let's call that new action `DELETE_ITEM`. This action will have a payload of item `id`. Let's write a unit test for our updated reducer function.

Our new reducer unit test is failing as expected. Let's fix it.

We'll add `DELETE_ITEM` case to our reducer and return a new app state object. It's important to note that we don't want to mutate the existing list of items, but rather create a new list without the deleted item.

It's a good idea to move item JSX code into it's own functional component. We'll call that new component `Item`  and place it under `ItemsList` component to communicate the fact that `Item` is a child of `ItemsList`.

We'll add `mapDispatchToProps` with `onDelete` to `ItemsList`. We'll pass `onDelete` prop to every `Item`. We'll update our unit tests as well.

### Improvements

+ Install Jest and use `jest.fn()` for mocking functions.

+ Create snapshots for existing components.

+ Use function declaration instead of a function expression when declaring `ItemsList` and `Item` components. This will improve error reporting in unit tests, since now the functional component is named (instead of being anonymous).

## Task 2: Be able to mark items as complete. And then toggle them back to incomplete.

This means every item now will have two states: complete and incomplete. We'll need to update our app's state once again. We'll add `isComplete` flag to every item in our initial state. Initially it'll be set to `false`.

We'll create a new action `SET_ITEM_IS_COMPLETE` and a new action creator function.

We'll introduce a new prop for `Item` component: `onToggleIsComplete`. It will call our new action with item's id and a boolean value.

We'll add a new unit test for reducer.

## Task 3: Add a filter than can be toggled to hide completed items.

This means we'll need to add a new state to our app. This state is not related to individual items, but it rather affects the entire app. Hence we'll create a new reducer called `filters`. This reducer will have a single state property: `isHideComplete`. We'll add a new action type and a new action creator for it. We'll write a unit test for `filters` reducer as well.

Now in `ItemsList` component we'll filter out items based on `isHideComplete` state.

### Improvements

+ Separate _presentational components_ from _container components_.

+ Use named functions instead of function expressions for better error reporting.

+ Write unit tests for component behaviour. Mount component with enzyme and check that component calls mock function on click.

+ Write unit tests for action creator functions.

+ Generate snapshots for components.
