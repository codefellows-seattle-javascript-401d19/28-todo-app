
##Lab 28 Note Taking App

#### App
* The app component should manage the frontend routes and have a navbar
* the `/` route should display the `Landing` component
* the `/dashboard` route should display the `Dashboard` component

#### Landing
*  Props: No
*  Uses Props: No
*  Has State: No

*  The landing component renders a welcome message to the user.


#### Dashboard Component 
*  Props: Yes
*  Uses Props: Yes
*  Has State: App State
 
The dashboard dashboard renders a note form where the user may input a title of the note and its content.  On submission, it renders the note and a delete button.  

Using the bound handleAddNote() method, the note is saved in state with properties: 
`id (int)` `editing (boolean)` `completed (boolean)` `content (string)` `title (string)`

Using the bound removeNote() method, the note is removed from state by reference to its id and will no longer be rendered on the page.


#### NoteForm Component
*  Props: Yes
*  Uses Props: Yes
*  Has State: UI State

Using the bound removeNote() method, the note is removed from state by reference to its id and will no longer be rendered on the page.

#### NoteList Component 
*  Props: Yes
*  Uses Props: Yes
*  Has State: No

Uses a render () method as a hook to display an unordered list by mapping over the notes array which are passes as props from the Dashboard component.



#### NoteItem
*  Props: Yes
*  Uses Props: Yes
*  Has State: No

Uses a render () method as a hook to create a list item with a title and content, both of which are accessed as props which are passed in by the Dashboard component. It also renders a button that has `onClick` delete functionality provided by the handleRemoveNote() method.

## Test
* Test Dashboard
  * Tests the initial state
* Test NoteForm
  * Tests the initial state

