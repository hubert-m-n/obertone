import React, { useState, useEffect } from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { snakeCase } from "lodash"

import Event from "./components/event/Event"
import OrderNavControl from "./OrderNavControl"
import { SECTION_NAMES } from "common/sectionNames"

import styles from "./OrderPage.module.scss"
import commonStyles from "../common/commonStyles.module.scss"

const dicounts = [
  { title: "Mitglied im OBERTÖNE-Club (20%)", value: 20 },
  {
    title: "SchülerIn, StudentIn bis 30 Jahre oder Mensch mit Handycap (20%)",
    value: 20,
  },
  { title: "Ö1-Club-Mitglied (10%)", value: 10 },
  { title: "Ö1-Intro-Mitglied (30%)", value: 30 },
]

const membershipTypes = ["Clubmitglied", "Fördermitglied"]
//test
const emailRegExp = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

const validate = (contactInfo) => {
  const result = {}

  if (!contactInfo.name) {
    result.name = "Bitte dieses Feld ausfüllen"
  }

  if (!contactInfo.street) {
    result.street = "Bitte dieses Feld ausfüllen"
  }

  if (!contactInfo.zipCode) {
    result.zipCode = "Bitte dieses Feld ausfüllen"
  }

  if (!contactInfo.place) {
    result.place = "Bitte dieses Feld ausfüllen"
  }

  if (!contactInfo.email) {
    result.email = "Bitte dieses Feld ausfüllen"
  }

  if (contactInfo.email && !emailRegExp.test(contactInfo.email)) {
    result.email = "Bitte eine gültige Email-Adresse einfügen"
  }

  return result
}

const formatBackendParams = (paramsMap) =>
  Object.keys(paramsMap)
    .map((key) => `${snakeCase(key)}=${paramsMap[key]}`)
    .join("&")

const OrderPage = () => {
  const [programs, setPrograms] = useState({})
  const [discountType, setDiscountType] = useState(-1)
  const [membershipType, setMembershipType] = useState(-1)
  const [isClubMember, setIsClubMember] = useState(0)
  const [contribution, setContribution] = useState(0)
  const [isContributionInputFocused, setIsContributionInputFocused] = useState(
    false
  )
  const [contactInfo, setContactInfo] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isSubmitted) {
      setErrors(validate(contactInfo))
    }
  }, [isSubmitted, contactInfo])

  const handleEventsChange = (data) => {
    const { program, ...rest } = data

    setPrograms({
      ...programs,
      [program]: {
        ...rest,
      },
    })
  }

  const updateContactInfo = (propName, value) => {
    setContactInfo({
      ...contactInfo,
      [propName]: value,
    })
  }

  const sendOrder = () => {
    const errors = validate(contactInfo)

    setIsSubmitted(true)
    if (errors.street || errors.zipCode || errors.email) {
      return
    }

    var emailRequest = new XMLHttpRequest()
    emailRequest.open("POST", "/php/send_order.php", true)
    emailRequest.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded; charset=utf-8"
    )

    emailRequest.onreadystatechange = function () {
      if (emailRequest.readyState == 4) {
        setIsSent(true)
      }
    }

    const categories = Object.keys(programs).reduce((acc, program) => {
      for (let [category, categoyQty] of Object.entries(programs[program])) {
        if (categoyQty) {
          acc = {
            ...acc,
            [`${snakeCase(program)}_${snakeCase(category)}`]: categoyQty,
          }
        }
      }
      return acc
    }, {})

    const requestData = {
      ...categories,
      ...contactInfo,
      isClubMember,
      contribution,
    }

    if (discountType >= 0) {
      requestData.discount = dicounts[discountType].value
      requestData.discountType = discountType
    }

    if (membershipType >= 0) {
      requestData.membershipType = membershipTypes[membershipType]
    }

    emailRequest.send(formatBackendParams(requestData))
  }

  if (isSent) {
    return (
      <div className={styles.container}>
        <OrderNavControl />
        <div className={classNames(styles.content, styles.confirmationContent)}>
          <div className={styles.mainText}>
            Vielen Dank für Ihr Interesse an der OBERT&Ouml;NE SOMMERMUSIK! Ihre
            Nachricht wurde an uns verschickt, und Sie werden in K&uuml;rze Post
            von uns erhalten. Falls Sie noch Fragen haben, erreichen Sie uns
            unter
            <a href="mailto:info@sommermusik.at" className={styles.whiteLink}>
              info@sommermusik.at
            </a>{" "}
            und 0681 8133 8493.
          </div>
          <div
            onClick={() => window.location.reload()}
            className={classNames(
              styles.button,
              styles.confirmationButton,
              styles.orderButton,
              commonStyles.withRoundedBorder
            )}
          >
            gleich Tickets bestellen für die OBERTT&Ouml;NE Kammermusiktage
          </div>
          <Link
            to={SECTION_NAMES.HOME}
            className={classNames(
              styles.button,
              styles.confirmationButton,
              styles.homeButton,
              commonStyles.withRoundedBorder
            )}
          >
            zurück <br /> auf www.sommermusik.at
          </Link>
        </div>
      </div>
    )
  }

  const handleMembershipChange = () => {
    setMembershipType(!isClubMember ? 0 : -1)
    setContribution(!isClubMember !== 0 ? 20 : 0)
    setIsClubMember(+!isClubMember)
  }

  return (
    <div className={styles.container}>
      <OrderNavControl />
      <h2 className={styles.title}>Sichern Sie sich hier Ihre Tickets</h2>
      <div className={styles.content}>
        Falls Sie Fragen haben, senden Sie uns bitte ein Email! Wir helfen Ihnen
        gerne weiter:{" "}
        <a href="mailto:info@obertone.at" className={styles.obertoneLink}>
          info@obertone.at
        </a>
        <Event
          id="concert1"
          date="Samstag, 4. Juli 2020"
          place="18 Uhr Konventshof, Stift Stams"
          program="Ungehörte Barockmusik"
          onChange={handleEventsChange}
          color="#dd055a"
          isCategoryASoldOut={true}
          isCategoryBSoldOut={true}
          isCategoryCSoldOut={true}
        />
        <Event
          id="concert2"
          date="Sonntag, 12. Juli 2020"
          place="18 Uhr Garten der Orangerie, Stift Stams"
          program="Spannendes im Orangeriegarten"
          onChange={handleEventsChange}
          color="#dd055a"
          isCategoryASoldOut={true}
          isCategoryBSoldOut={true}
          isCategoryCSoldOut={true}
        />
        <p className={classNames(styles.sectionTitle, styles.disctountTitle)}>
          Ermäßigungen
        </p>
        {dicounts.map(({ title }, i) => (
          <div
            key={`discount-${i}`}
            className={classNames(
              styles.button,
              styles.discountButton,
              commonStyles.withRoundedBorder,
              {
                [styles.selected]: discountType === i,
              }
            )}
            onClick={() => setDiscountType(i !== discountType ? i : -1)}
          >
            {title}
          </div>
        ))}
        <p className={classNames(styles.sectionTitle, styles.membershipTitle)}>
          Club-Mitgliedschaft
        </p>
        <div
          className={classNames(
            styles.button,
            styles.membershipButton,
            commonStyles.withRoundedBorder,
            {
              [styles.selected]: !!isClubMember,
            }
          )}
          onClick={handleMembershipChange}
        >
          Ja, ich möchte Mitglied im OBERTÖNE-Club werden (ab 20€).
        </div>
        <div className={styles.membershipDescription}>
          Ich erhalte bis 20% Ermäßigung auf alle Tickets, Zugang zu
          Sonderveranstaltungen exklusiv für Mitglieder und frühzeitige
          Information über Konzerte, Programme, Künstler.
        </div>
        {!!isClubMember && (
          <div className={styles.membershipTypes}>
            <div className={styles.membershipTypeWrapper}>
              <div
                className={classNames(
                  styles.button,
                  styles.membershipButton1,
                  commonStyles.withRoundedBorder,
                  {
                    [styles.selected]: membershipType === 0,
                  }
                )}
                onClick={() => {
                  setMembershipType(membershipType !== 0 ? 0 : -1)
                  setContribution(membershipType !== 0 ? 20 : 0)
                  if (membershipType === 0) {
                    setIsClubMember(0)
                  }
                }}
              >
                {membershipTypes[0]}
              </div>
              <div className={styles.membershipPrice}>ab € 20</div>
            </div>
            <div className={styles.membershipTypeWrapper}>
              <div
                className={classNames(
                  styles.button,
                  styles.membershipButton2,
                  commonStyles.withRoundedBorder,
                  {
                    [styles.selected]: membershipType === 1,
                  }
                )}
                onClick={() => {
                  setMembershipType(membershipType !== 1 ? 1 : -1)
                  setContribution(membershipType !== 1 ? 100 : 0)
                  if (membershipType === 1) {
                    setIsClubMember(0)
                  }
                }}
              >
                {membershipTypes[1]}
              </div>
              <div className={styles.membershipPrice}>ab € 100</div>
            </div>
          </div>
        )}
        <div className={styles.contribution}>
          <label
            className={classNames(styles.contributionInputWrapper, {
              [styles.hasValue]: isContributionInputFocused || !!contribution,
            })}
          >
            <span className={styles.contributionAmountLabel}>
              Mein Beitrag:
            </span>
            <input
              type="number"
              value={contribution}
              onChange={({ target }) =>
                setContribution(parseInt(target.value, 10))
              }
              onFocus={() => setIsContributionInputFocused(true)}
              onBlur={() => {
                setIsContributionInputFocused(false)
                if (!contribution) {
                  setMembershipType(-1)
                }
              }}
            />
          </label>
        </div>
        <div className={styles.contactInfo}>
          <p
            className={classNames(styles.sectionTitle, styles.contactInfoTitle)}
          >
            Meine Daten
          </p>

          <div className={styles.inputLineWrapper}>
            <input
              className={classNames(styles.contactInfoInput, {
                [styles.invalid]: errors.name,
              })}
              placeholder="Name*"
              onChange={({ target }) => updateContactInfo("name", target.value)}
            />
          </div>
          <div className={styles.inputLineWrapper}>
            <input
              className={classNames(styles.contactInfoInput, {
                [styles.invalid]: errors.street,
              })}
              placeholder="Straße*"
              onChange={({ target }) =>
                updateContactInfo("street", target.value)
              }
            />
          </div>
          <div className={styles.inputLineWrapper}>
            <input
              className={classNames(styles.contactInfoInput, styles.plzInput, {
                [styles.invalid]: errors.zipCode,
              })}
              placeholder="PLZ*"
              onChange={({ target }) =>
                updateContactInfo("zipCode", target.value)
              }
            />
            <input
              className={classNames(styles.contactInfoInput, styles.ortInput, {
                [styles.invalid]: errors.place,
              })}
              placeholder="Ort*"
              onChange={({ target }) =>
                updateContactInfo("place", target.value)
              }
            />
          </div>
          <div className={styles.inputLineWrapper}>
            <input
              className={classNames(styles.contactInfoInput, {
                [styles.invalid]: errors.country,
              })}
              placeholder="Land (wenn nicht Österreich)"
              onChange={({ target }) =>
                updateContactInfo("country", target.value)
              }
            />
          </div>
          <div className={styles.inputLineWrapper}>
            <input
              className={classNames(styles.contactInfoInput, {
                [styles.invalid]: errors.email,
              })}
              placeholder="Email*"
              onChange={({ target }) =>
                updateContactInfo("email", target.value)
              }
            />
          </div>
          <div className={styles.inputLineWrapper}>
            <input
              className={classNames(styles.contactInfoInput, {
                [styles.invalid]: errors.phone,
              })}
              placeholder="Telefon"
              onChange={({ target }) =>
                updateContactInfo("phone", target.value)
              }
            />
          </div>
          <div className={styles.contactInfoHint}>
            Mit * gekennzeichnete Felder müssen ausgefüllt werden.
          </div>
        </div>
        <div className={styles.footerText}>
          Nachdem Sie dieses Formular absenden, bekommen Sie eine Nachricht von
          uns mit Zahlungshinweisen und einer Reservierungsbestätigung. Bei
          Anmeldung einer Club-Mitgliedschaft bekommen Sie entsprechende
          Dokumente.
        </div>
        <div className={styles.footerButtonsWrapper}>
          <Link
            to={SECTION_NAMES.HOME}
            className={classNames(
              styles.button,
              styles.footerButton,
              styles.redirectButton,
              commonStyles.withRoundedBorder
            )}
          >
            Formular leeren und zurück auf sommermusik.at
          </Link>
          <div
            className={classNames(
              styles.button,
              styles.footerButton,
              styles.confirmButton,
              commonStyles.withRoundedBorder
            )}
            onClick={sendOrder}
          >
            absenden
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
