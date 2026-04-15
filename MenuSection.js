Now update menu with real items from the Google listing (Tatar Wołowy, Truffle Smash, etc.):
Action: file_editor str_replace /app/frontend/src/components/MenuSection.js --old-str "  burgers: [
    {
      name: \"Classic Smash Burger\",
      price: \"28 zł\",
      desc: \"Podwójny smash patty, ser cheddar, pikle, cebula, sos Ugryź\",
      tag: \"BESTSELLER\",
    },
    {
      name: \"BBQ Bacon Beast\",
      price: \"34 zł\",
      desc: \"200g wołowiny, boczek, cheddar, krążki cebulowe, sos BBQ Jack Daniel's\",
    },
    {
      name: \"Smokey Jalapeño\",
      price: \"32 zł\",
      desc: \"Wędzona wołowina, jalapeño, pepper jack, sałata, sos chipotle\",
    },
    {
      name: \"Pulled Pork Burger\",
      price: \"33 zł\",
      desc: \"Szarpana wieprzowina, coleslaw, sos Carolina, pikle\",
      tag: \"NOWOŚĆ\",
    },
    {
      name: \"Veggie Grill\",
      price: \"26 zł\",
      desc: \"Grillowany halloumi, pieczarki portobello, rukola, sos czosnkowy\",
    },
  ]," --new-str "  burgers: [
    {
      name: \"Classic Smash Burger\",
      price: \"28 zł\",
      desc: \"Podwójny smash patty, ser cheddar, pikle, cebula, sos Ugryź\",
      tag: \"BESTSELLER\",
    },
    {
      name: \"Truffle Smash\",
      price: \"36 zł\",
      desc: \"Smash patty, truflowy aioli, gruyère, karmelizowana cebula, rukola\",
      tag: \"PREMIUM\",
    },
    {
      name: \"BBQ Bacon Beast\",
      price: \"34 zł\",
      desc: \"200g wołowiny, boczek, cheddar, krążki cebulowe, sos BBQ Jack Daniel's\",
    },
    {
      name: \"Smokey Jalapeño\",
      price: \"32 zł\",
      desc: \"Wędzona wołowina, jalapeño, pepper jack, sałata, sos chipotle\",
    },
    {
      name: \"Pulled Pork Burger\",
      price: \"33 zł\",
      desc: \"Szarpana wieprzowina, coleslaw, sos Carolina, pikle\",
      tag: \"NOWOŚĆ\",
    },
  ],"
Observation: Edit was successful.
