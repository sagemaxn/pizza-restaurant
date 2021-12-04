describe('Piza Things on the pizza page', () => {
    it('does pizza stuff', () => {
      cy.visit('http://localhost:3000/pizza')
    
      cy.get(`[data-cy=select]`).eq(0).select('small')
      
      cy.get(`[data-cy=select]`).eq(1).select("8")
      cy.get('[data-cy=submit').eq(0).click()
    

      cy.get('[data-cy=button').click().contains('8')
      
      cy.contains('Cancel')
      cy.get('[data-cy=button').eq(1).click()
      cy.url().should('include', '/cart')

      cy.contains('Menu').click()

     // cy.select('[data-cy=select]')
    })
  })