Feature: switch and save with Telnyx sliders functionality check for sms tab
  Scenario: switch and save with Telnyx sliders functionality check for sms tab
    Given I visit telnyx.com website main page
    When When This site uses cookies window appears i close IT
    Then ^I scroll page to switch+save with Telnyx block
    And I click on SMS button
    And ^I see default settings preset for this block

    Then I move Send messages and Receive messages sliders
    And ^I see that price in Compare Costs section is changed