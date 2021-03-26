describe('Courses', () => {
  it('Displays a list of courses', () => {
    cy.visit('/courses');

    cy.get(`[data-test^="course-instructor"]`).should('have.length', 5);
  });

  it('Displays course details', () => {
    cy.visit('/courses');

    cy.get(`[data-test="course-instructor-65"]`).should('contain', 'Alice Waters');
    cy.get(`[data-test="course-title-65"]`).should('contain', 'Teaches the Art of Home Cooking');
    cy.get(`[data-test="instructor-headshot-65"]`).should('exist');
  });

  it('Course can be favourited', () => {
    cy.visit('/courses');

    cy.get(`[data-test="course-65"] span`).should('have.class', 'not-yet-favourited');

    cy.get(`[data-test="course-instructor-65"]`).click();

    cy.get(`[data-test="course-65"] span`).should('have.class', 'favourite');
  });
});
