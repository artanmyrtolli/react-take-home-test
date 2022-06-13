describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/getBallotData', {fixture: 'ballots'})
    cy.visit('http://localhost:3000')
  })

  it('should have a title header', () => {
    cy.get('h1').contains('Awards 2022')
  })

  it('should render different categories', () => {
    cy.get('.category__header').should('have.length', 2)
    cy.get('.category__header').first().contains('Best Picture')
    cy.get('.category__header').eq(1).contains('Best Director')
  })

  it('should render a card for each nominee', () => {
    cy.get('.nominee__card').should('have.length', 10)
  })
  
  it('should render 5 nominees for each category', () => {
    cy.get('.nominees').first().children().should('have.length', 5)
  })

  it('should change card\'s border color on selection', () => {
    cy.get('.nominee__button').first().click()
    cy.get('.nominee__card').first().should('have.css', 'border', '4px solid rgb(255, 255, 0)')
  })

  it('should only allow one selection per category', () => {
    cy.get('.nominee__button').first().click()
    cy.get('.nominee__button').eq(3).click()

    cy.get('.nominee__card').first().should('have.css', 'border', '1px solid rgb(255, 255, 255)')
    cy.get('.nominee__card').eq(3).should('have.css', 'border', '4px solid rgb(255, 255, 0)')
  })

  it('should display a modal upon submission', () => {
    cy.get('.App__submit-button').click()
    cy.get('h4').contains('Success!')
  })

  it('should default submissions as "None" if that category is not selected', () => {
    cy.get('.App__submit-button').click()
    cy.get('.modal__result-selection').contains('None')
  })

  it('should keep track of user\'s selections', () => {
    cy.get('.nominee__button').first().click()
    cy.get('.nominee__button').eq(6).click()

    cy.get('.App__submit-button').click()
    cy.get('.modal__result-selection').first().contains('NOMADLAND')
    cy.get('.modal__result-selection').eq(1).contains('AARON SORKIN')
  })

})