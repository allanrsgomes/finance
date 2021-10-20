const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transaction = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'WebSite',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -2000,
        date: '23/01/2021',
    }
]

const Transaction = {
    icomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saidas
    },
    total() {
        //entradas - saidas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        `

        return html
    }
}

DOM.addTransaction(transaction[1])
