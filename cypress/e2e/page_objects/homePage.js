class homePage
{
    cartButton(){
        const reasonDropDown = cy.get('div.tx-Z12IMoF > button').click()
    }
}

module.exports = new homePage();