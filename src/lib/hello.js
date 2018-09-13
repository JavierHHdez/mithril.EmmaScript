var hello = module.exports = {}

hello.view = function(ctx) {
    return m('div', [
        m('h1', {class: 'title'}, 'My first app'),
        m('button', {class:'btn btn-primary'}, 'A button'),
    ])
}
