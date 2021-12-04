describe('Cart stuff', () => {
    beforeEach('does cart stuff', () => {
      cy.visit('http://localhost:3000/pizza')

      cy.get('[data-cy=submit]').eq(0).click()

      cy.get(`[data-cy=select]`).eq(0).select('small')      
      cy.get(`[data-cy=select]`).eq(1).select("4")
      cy.get('[data-cy=submit]').eq(0).click()

      cy.get('[data-cy=submit]').eq(1).click()
      cy.visit('http://localhost:3000/cart')    
    })
    it('renders correct amount of items and can delete them', () => { 
      cy.get('[data-cy=cartItem]').its('length').should('eq',3)

      cy.get('[data-cy=remove]').eq(0).click()
      cy.get('[data-cy=cartItem]').its('length').should('eq',2)
    })
    it('can change quantity and navigate to the checkout page', () => {
      cy.get(`[data-cy=select]`).eq(0).select("5") 
      cy.get(`[data-cy=select]`).eq(2).select("3") 
      cy.get('[data-cy=button').contains('12')

      cy.get('[data-cy=checkout]').click()
      cy.url().should('include', '/cart/checkout')
    })
  })