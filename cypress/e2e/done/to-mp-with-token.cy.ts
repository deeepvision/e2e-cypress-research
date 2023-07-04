describe('Access my assignments page with tokens', () => {
  it('should access My Assignments page', () => {
    //запит для отримання токена доступу
    cy.request({
      method: 'POST',
      url: 'https://app-dev.missionpassport.org/api/v1/auth/login',
      body: {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3MiLCJhdWQiOlsianMiLCJibyIsInN0ayIsImxnbCIsImFuIiwidnBtIiwibXAiLCJleHAiLCJvcCJdLCJpc3MiOiJibyIsInVpZCI6ImhjdTpBN3JHNVBEU2hLdyIsImlhdCI6MTY4ODA2MDUxOSwiZXhwIjoxNjg4MDYwODE5fQ.bqy_jTp2_bTQR8pi7dTHz4tCJByWF871I9AJ4Lwyzbk',
        refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZWZyZXNoIiwiaXNzIjoiYm8iLCJpZCI6ImJvcnQ6ZGV2OnE4OGtXeFFSb2pGIiwidWlkIjoiaGN1OkE3ckc1UERTaEt3IiwiaWF0IjoxNjg4MDYwNTE5LCJleHAiOjE2OTA2NTI1MTl9.ZU9ouGU42H-LGDJppfL9p2zSV6P_lu0hbCwP9sr-zpQ'
      },
      failOnStatusCode: false
    }).then((response) => {
      //токен доступу з відповіді
      const accessToken = response.body.accessToken;

      //здійснюємо запит до сторінки My Assignments з використанням токена доступу
      cy.visit('https://app-dev.missionpassport.org/my-assignments?org=hcorg:33O0ldvawCD', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      //перевіряємо урлу відповідає очікуваному значенню
      cy.url().should('include', 'https://app-dev.missionpassport.org/my-assignments');
    });
  });
});
