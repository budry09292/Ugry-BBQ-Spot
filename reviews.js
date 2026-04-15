Now update reviews with real ones:
Action: file_editor str_replace /app/frontend/src/components/Reviews.js --old-str "const reviews = [
  {
    text: \"Najlepsze żeberka jakie jadłem w życiu! Rozpływają się w ustach, sos BBQ uzależnia. Wracam co tydzień.\",
    author: \"Marcin K.\",
    rating: 5,
    subtitle: \"Google Maps\",
  },
  {
    text: \"Pulled pork sandwich to absolutny strzał w dziesiątkę. Mięso wędzone godzinami, czuć dym i pasję. Mega miejsce!\",
    author: \"Kasia W.\",
    rating: 5,
    subtitle: \"Google Maps\",
  },
  {
    text: \"Zamówiłem Mega Rack na dowóz — szok! Ogromna porcja, mięso odchodzi od kości, sosy rewelacyjne. Polecam każdemu!\",
    author: \"Tomek R.\",
    rating: 5,
    subtitle: \"Pyszne.pl\",
  },
];" --new-str "const reviews = [
  {
    text: \"Wystrój jest genialny. Bardzo przytulnie, jak w domu. Klimat rewelacyjny. Obsługa bardzo miła, uśmiechnięta i pomocna. Jedzenie na najwyższym poziomie!\",
    author: \"Łukasz W.\",
    rating: 5,
    subtitle: \"Lokalny przewodnik\",
  },
  {
    text: \"Wchodząc do Ugryź BBQ Spot pierwsze, na co zwraca się uwagę, to wystrój — bardzo ładny i zadbany. Zamówione burgery i żeberka podane z chrupiącymi dodatkami. Smacznie!\",
    author: \"Marta M.\",
    rating: 5,
    subtitle: \"Lokalny przewodnik\",
  },
  {
    text: \"Golonka mięciutka, aromatyczna i w ogóle fiu, fiu, fiu! Frytki z parmezanem z salsą epickie. Nowe miejsce na mapie Kowal, które warto polecić. Jedzenie wyborne!\",
    author: \"Anna Z.\",
    rating: 5,
    subtitle: \"Lokalny przewodnik\",
  },
];"
Observation: Edit was successful.
  Now update the reviews section header to include the 4.8 rating:
Action: file_editor str_replace /app/frontend/src/components/Reviews.js --old-str "          <h2
            data-testid=\"reviews-headline\"
            className=\"font-heading text-4xl md:text-5xl text-white mb-4\"
          >
            CO MÓWIĄ NASI GOŚCIE
          </h2>" --new-str "          <h2
            data-testid=\"reviews-headline\"
            className=\"font-heading text-4xl md:text-5xl text-white mb-4\"
          >
            CO MÓWIĄ NASI GOŚCIE
          </h2>
          <div className=\"flex items-center justify-center gap-3 mb-2\">
            <span className=\"font-heading text-3xl text-fire-orange\">4,8</span>
            <div className=\"flex gap-0.5\">
              {[1,2,3,4,5].map(i => (
                <Flame key={i} className={`w-5 h-5 ${i <= 4 ? 'text-fire-orange fill-fire-orange' : 'text-fire-orange/50 fill-fire-orange/50'}`} />
              ))}
            </div>
            <span className=\"font-body text-sm text-gray-500\">(786 opinii)</span>
          </div>"
Observation: Edit was successful.
