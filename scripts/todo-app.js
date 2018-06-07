let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    let textValue = e.target.elements.text.value
    textEl = textValue.trim()
    
    if (textEl.length > 0) {
        todos.push({
            id: uuidv4(),
            text: textEl,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.text.value = ''
    } else {
        alert('Please enter text')
    }
    
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})