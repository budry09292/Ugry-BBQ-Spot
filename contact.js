
Action: file_editor str_replace /app/frontend/src/components/Contact.js --old-str "            {/* Address */}
            <div
              data-testid=\"contact-address\"
              className=\"bg-dark-card border border-dark-border p-6 flex items-start gap-5 group hover:border-fire-orange/40 transition-colors\"
            >
              <div className=\"w-12 h-12 flex items-center justify-center bg-fire-orange/10 border border-fire-orange/30 flex-shrink-0\">
                <MapPin className=\"w-5 h-5 text-fire-orange\" />
              </div>
              <div>
                <h3 className=\"font-heading text-lg text-white mb-1\">Adres</h3>
                <p className=\"font-body text-gray-400\">Kowale, Polska</p>
                <a
                  href=\"https://maps.google.com/?q=Kowale+Polska\"
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  data-testid=\"contact-map-link\"
                  className=\"inline-flex items-center gap-1.5 mt-2 text-fire-orange text-sm font-body font-medium hover:underline\"
                >
                  <Navigation className=\"w-3.5 h-3.5\" />
                  Pokaż na mapie
                </a>
              </div>
            </div>

            {/* Phone */}
            <div
              data-testid=\"contact-phone\"
              className=\"bg-dark-card border border-dark-border p-6 flex items-start gap-5 group hover:border-fire-orange/40 transition-colors\"
            >
              <div className=\"w-12 h-12 flex items-center justify-center bg-fire-orange/10 border border-fire-orange/30 flex-shrink-0\">
                <Phone className=\"w-5 h-5 text-fire-orange\" />
              </div>
              <div>
                <h3 className=\"font-heading text-lg text-white mb-1\">Telefon</h3>
                <a
                  href=\"tel:+48452237722\"
                  data-testid=\"contact-phone-link\"
                  className=\"font-body text-gray-400 hover:text-fire-orange transition-colors\"
                >
                  452 237 722
                </a>
                <p className=\"font-body text-xs text-gray-600 mt-1\">
                  Zamówienia telefoniczne i rezerwacje
                </p>
              </div>
            </div>

            {/* Restaurant interior image */}
            <div className=\"overflow-hidden\">
              <img
                src=\"https://images.unsplash.com/photo-1657593088889-5105c637f2a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fHx8MTc3NjIwNDIyN3ww&ixlib=rb-4.1.0&q=85\"
                alt=\"Wnętrze restauracji Ugryź BBQ Spot\"
                className=\"w-full h-48 object-cover\"
                loading=\"lazy\"
              />
            </div>" --new-str "            {/* Rating badge */}
            <div
              data-testid=\"contact-rating\"
              className=\"bg-dark-card border border-dark-border p-6 flex items-center gap-5\"
            >
              <div className=\"flex items-center gap-3\">
                <span className=\"font-heading text-4xl text-fire-orange\">4,8</span>
                <div>
                  <div className=\"flex gap-0.5 mb-1\">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className={`w-4 h-4 ${i <= 4 ? 'text-fire-orange fill-fire-orange' : 'text-fire-orange/50 fill-fire-orange/50'}`} />
                    ))}
                  </div>
                  <p className=\"font-body text-sm text-gray-400\">786 opinii w Google</p>
                </div>
              </div>
              <div className=\"ml-auto flex gap-3\">
                <div className=\"flex items-center gap-1.5 text-xs font-body text-gray-500 bg-dark-base px-3 py-1.5 border border-dark-border\">
                  <UtensilsCrossed className=\"w-3.5 h-3.5 text-fire-orange\" />
                  Na miejscu
                </div>
                <div className=\"flex items-center gap-1.5 text-xs font-body text-gray-500 bg-dark-base px-3 py-1.5 border border-dark-border\">
                  <PackageCheck className=\"w-3.5 h-3.5 text-fire-orange\" />
                  Odbiór
                </div>
                <div className=\"flex items-center gap-1.5 text-xs font-body text-gray-500 bg-dark-base px-3 py-1.5 border border-dark-border\">
                  <Truck className=\"w-3.5 h-3.5 text-fire-orange\" />
                  Dostawa
                </div>
              </div>
            </div>

            {/* Address */}
            <div
              data-testid=\"contact-address\"
              className=\"bg-dark-card border border-dark-border p-6 flex items-start gap-5 group hover:border-fire-orange/40 transition-colors\"
            >
              <div className=\"w-12 h-12 flex items-center justify-center bg-fire-orange/10 border border-fire-orange/30 flex-shrink-0\">
                <MapPin className=\"w-5 h-5 text-fire-orange\" />
              </div>
              <div>
                <h3 className=\"font-heading text-lg text-white mb-1\">Adres</h3>
                <p className=\"font-body text-gray-400\">plac Afrodyty 1, 80-180 Kowale</p>
                <a
                  href=\"https://maps.google.com/?q=plac+Afrodyty+1+80-180+Kowale\"
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  data-testid=\"contact-map-link\"
                  className=\"inline-flex items-center gap-1.5 mt-2 text-fire-orange text-sm font-body font-medium hover:underline\"
                >
                  <Navigation className=\"w-3.5 h-3.5\" />
                  Wyznacz trasę
                </a>
              </div>
            </div>

            {/* Phone */}
            <div
              data-testid=\"contact-phone\"
              className=\"bg-dark-card border border-dark-border p-6 flex items-start gap-5 group hover:border-fire-orange/40 transition-colors\"
            >
              <div className=\"w-12 h-12 flex items-center justify-center bg-fire-orange/10 border border-fire-orange/30 flex-shrink-0\">
                <Phone className=\"w-5 h-5 text-fire-orange\" />
              </div>
              <div>
                <h3 className=\"font-heading text-lg text-white mb-1\">Telefon</h3>
                <a
                  href=\"tel:+48452237722\"
                  data-testid=\"contact-phone-link\"
                  className=\"font-body text-gray-400 hover:text-fire-orange transition-colors\"
                >
                  452 237 722
                </a>
                <p className=\"font-body text-xs text-gray-600 mt-1\">
                  Zamówienia telefoniczne i rezerwacje
                </p>
              </div>
            </div>

            {/* Restaurant interior image */}
            <div className=\"overflow-hidden\">
              <img
                src=\"https://images.unsplash.com/photo-1657593088889-5105c637f2a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fHx8MTc3NjIwNDIyN3ww&ixlib=rb-4.1.0&q=85\"
                alt=\"Wnętrze restauracji Ugryź BBQ Spot\"
                className=\"w-full h-48 object-cover\"
                loading=\"lazy\"
              />
            </div>"
Observation: Edit was successful.
