var JSON, cp;
JSON || (JSON = {}),
    (function () {
        "use strict";
        function i(n) {
            return n < 10 ? "0" + n : n;
        }
        function o(n) {
            return (
                (e.lastIndex = 0),
                e.test(n)
                    ? '"' +
                      n.replace(e, function (n) {
                          var t = s[n];
                          return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4);
                      }) +
                      '"'
                    : '"' + n + '"'
            );
        }
        function u(i, f) {
            var s,
                l,
                h,
                a,
                v = n,
                c,
                e = f[i];
            e && typeof e == "object" && typeof e.toJSON == "function" && (e = e.toJSON(i));
            typeof t == "function" && (e = t.call(f, i, e));
            switch (typeof e) {
                case "string":
                    return o(e);
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "boolean":
                case "null":
                    return String(e);
                case "object":
                    if (!e) return "null";
                    if (((n += r), (c = []), Object.prototype.toString.apply(e) === "[object Array]")) {
                        for (a = e.length, s = 0; s < a; s += 1) c[s] = u(s, e) || "null";
                        return (h = c.length === 0 ? "[]" : n ? "[\n" + n + c.join(",\n" + n) + "\n" + v + "]" : "[" + c.join(",") + "]"), (n = v), h;
                    }
                    if (t && typeof t == "object") for (a = t.length, s = 0; s < a; s += 1) typeof t[s] == "string" && ((l = t[s]), (h = u(l, e)), h && c.push(o(l) + (n ? ": " : ":") + h));
                    else for (l in e) Object.prototype.hasOwnProperty.call(e, l) && ((h = u(l, e)), h && c.push(o(l) + (n ? ": " : ":") + h));
                    return (h = c.length === 0 ? "{}" : n ? "{\n" + n + c.join(",\n" + n) + "\n" + v + "}" : "{" + c.join(",") + "}"), (n = v), h;
            }
        }
        typeof Date.prototype.toJSON != "function" &&
            ((Date.prototype.toJSON = function () {
                return isFinite(this.valueOf())
                    ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z"
                    : null;
            }),
            (String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
                return this.valueOf();
            }));
        var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            n,
            r,
            s = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
            t;
        typeof JSON.stringify != "function" &&
            (JSON.stringify = function (i, f, e) {
                var o;
                if (((n = ""), (r = ""), typeof e == "number")) for (o = 0; o < e; o += 1) r += " ";
                else typeof e == "string" && (r = e);
                if (((t = f), f && typeof f != "function" && (typeof f != "object" || typeof f.length != "number"))) throw new Error("JSON.stringify");
                return u("", { "": i });
            });
        typeof JSON.parse != "function" &&
            (JSON.parse = function (text, reviver) {
                function walk(n, t) {
                    var r,
                        u,
                        i = n[t];
                    if (i && typeof i == "object") for (r in i) Object.prototype.hasOwnProperty.call(i, r) && ((u = walk(i, r)), u !== undefined ? (i[r] = u) : delete i[r]);
                    return reviver.call(n, t, i);
                }
                var j;
                if (
                    ((text = String(text)),
                    (f.lastIndex = 0),
                    f.test(text) &&
                        (text = text.replace(f, function (n) {
                            return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4);
                        })),
                    /^[\],:{}\s]*$/.test(
                        text
                            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
                            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
                    ))
                )
                    return (j = eval("(" + text + ")")), typeof reviver == "function" ? walk({ "": j }, "") : j;
                throw new SyntaxError("JSON.parse");
            });
    })(),
    (function (n) {
        n.serverSettings = {
            widget: {
                googlePayEnvironment: "PRODUCTION",
                rootUrl: "https://widget.cloudpayments.ru",
                errorHandlerUrl: "https://api.cloudpayments.ru/Home/RegisterWidgetError",
                easyXDMSwfPath: "/scripts/easyxdm.swf",
                payformPathFormat: "/payforms/{0}/index.html",
                threeDSPopupCallbackPath: "/Home/ThreeDSPopupCallback",
                merchantBundlePath: "/bundles/cloudpayments",
                threeDSCallbackPath: "/Home/ThreeDSCallback",
                loadingImagePath: "/images/overlay-loading.svg",
                dummyPath: "/dummy.html",
                binInfoServicePath: "/Home/BinInfo",
                merchantTerminalServicePath: "/Home/MerchantInfo",
                startApplePaySessionServicePath: "/ApplePay/StartSession",
                masterPassUrl: "https://wallet.masterpass.ru",
                masterPassTestUrl: "https://testwallet.masterpass.ru",
                api: {
                    url: "https://api.cloudpayments.ru",
                    authPath: "/Payments/Auth",
                    chargePath: "/Payments/Charge",
                    threeDSCallbackPath: "/Payments/ThreeDsCallback",
                    startSession: "https://api.cloudpayments.ru/ApplePay/StartSessionInternal/",
                    terminalInfo: "/merchant/configuration/",
                },
                defaultCulture: "ru",
                detectedCulture: "",
            },
        };
    })(cp || (cp = {})),
    (function (n) {
        var t, i;
        n.localization ||
            ((n.localization =
                typeof ko != "undefined"
                    ? ko.observable()
                    : function (n) {
                          if (n) t = n;
                          else return t;
                      }),
            (n.localization.entry = function (t) {
                var i = n.localization().entries[t];
                return typeof i == "undefined", i;
            }));
        i = {
            cultureName: "",
            entries: {
                "5096_extra": "Повторите попытку позже",
                "5065_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                "5030_extra": "Повторите попытку позже",
                ValidationHelper_Validator_CardNumber_Empty: "Inserisci il numero della carta",
                "5043_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                Payframe_Try_Again: "Повторить оплату",
                Payframe_Labels_CardExpDateMonth: "ММ",
                ValidationHelper_Validator_ExpDateMonth_Empty: "Укажите месяц",
                Payframe_Tooltips_CardHolderName: "Латиницей, как указано на карте",
                Payframe_MP_ResendCode: "Отправить код повторно",
                "5006_extra": "Проверьте правильность введенных данных карты или воспользуйтесь другой картой",
                Payframe_MP_Description:
                    "Глобальная платформа для электронных кошельков и онлайн-магазинов, благодаря которой можно не указывать подробные данные для оплаты\r\n                                    и доставки товара, и которая упрощает и ускоряет процесс покупки\r\n                                    при помощи любого устройства, подключенного к интернет.",
                Payframe_Labels_CardNumber_Note: "Например:",
                "5207_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                Payframe_MP_IncorrectOTP: "Неверный код",
                Payframe_SendInvoice: "Получить квитанцию на E-mail",
                Payframe_MP_ChangeNumber: "Изменить номер",
                "5034_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                Payframe_Labels_ValidThru: "Действует до:",
                Payframe_Tooltips_Cvv: "Последние 3 или 4 цифры на белой полосе с обратной стороны карты",
                "3007_extra": "Платеж будет отклонен. Попробуйте позже.",
                Payframe_Labels_CardNumber: "Номер карты",
                "5091_extra": "Повторите попытку позже или воспользуйтесь другой картой",
                "5082_extra": "Проверьте правильность введенных данных карты или воспользуйтесь другой картой",
                ValidationHelper_Validator_Name_Empty: "Введите имя",
                Payframe_MP_CardMutateFail: "Не удалось изменить карту",
                Payframe_Labels_CardExpDateYear: "ГГ",
                ValidationHelper_Validator_ExpDateMonthYear_Empty: "Укажите год/месяц",
                Payframe_OpenThreeDSButton: "Продолжить",
                Payframe_EnterYourCardDetails_Short: "Введите данные для оплаты",
                Payframe_MP_PayingText: "Для оплаты сохранённой картой или сохранения новой карты, подтвердите ваш номер телефона.",
                Payframe_MP_CardSaved: "Ваша карта сохранена",
                "5041_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                Payframe_MP_SaveCard: "Сохранить карту",
                ValidationHelper_Validator_Name_TooLong: "Слишком много символов",
                "3003_extra": "Обратитесь в поддержку сайта",
                Payframe_MP_Error: "Произошла ошибка",
                ValidationHelper_Validator_ExpDateMonth_Invalid: "Некорректное значение месяца",
                Payframe_EnterYourCardDetails: "Введите данные карты <br>для оплаты",
                Payframe_MP_Send: "Отправить",
                Payframe_Labels_CardHolderName_Note: "Латиница, например:<br>OLEG FOMIN",
                "5013_extra": "Проверьте корректность суммы",
                Payframe_Tooltips_CardNumber: "Номер карты напечатан на лицевой стороне карты и состоит из 15, 16 или 19 цифр",
                Payframe_Code_Fail: "Произошла ошибка",
                "5204_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                ValidationHelper_Validator_Name_Invalid: "В имени допущены ошибки",
                Payframe_MP_CardsNotFound: "Нет сохранённых карт",
                Payframe_MaximizeButton_Title_Maximized: "На всю страницу",
                "3004_extra": "Обратитесь в поддержку сайта",
                Payframe_Labels_CardHolderName: "Имя владельца",
                Payframe_Labels_Email_Expanded: "Ваш e-mail",
                ValidationHelper_Validator_Cvv_Empty: "Введите CVC код",
                Payframe_Labels_Cvv: "CVV",
                Payframe_MP_CodeSended_2: "был отправлен одноразовый код.",
                Payframe_MP_CodeSended_1: "На номер",
                ValidationHelper_Validator_ExpDateYear_Empty: "Укажите год",
                "3005_extra": "Платеж будет отклонен",
                Payframe_Labels_Email: "Ваш e-mail",
                Payframe_Labels_Cvv_Note: "Последние 3 или 4 цифры<br>с обратной стороны карты",
                Payframe_ButtonText_Init: "Оплатить",
                Payframe_ButtonText_Fail: "Отменить оплату",
                Payframe_Title_Processing: "Выполняется оплата",
                Payframe_Labels_CardHolderName_Placeholder: "Имя владельца",
                "5012_extra": "Воспользуйтесь другой картой или свяжитесь с банком, выпустившим карту",
                Payframe_MP_CardDeleted: "Карта удалена",
                "5001_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                Payframe_MyCards: "Мои карты",
                ValidationHelper_Validator_Email_Empty: "Укажите e-mail адрес",
                Payframe_StatusText_Processing_OpenThreeDS: "Ваша карта участвует в программе 3-D Secure.<br> Для завершения платежа вам необходимо пройти авторизацию на сайте вашего банка.",
                Payframe_Code_Success: "Оплата завершена успешно!",
                "3001_extra": "Платеж будет отклонен",
                ValidationHelper_Validator_Email_Invalid: "В e-mail адресе допущены ошибки",
                "3006_extra": "Платеж будет отклонен. Попробуйте позже.",
                "5054_extra": "Проверьте правильность введенных данных карты или воспользуйтесь другой картой",
                ValidationHelper_Validator_Cvv_Invalid: "Код с обратной стороны карты должен состоять из трёх цифр",
                "5031_extra": "Воспользуйтесь другой картой",
                ValidationHelper_Validator_CardNumber_Invalid: "В номере карты допущены ошибки",
                Payframe_MP_SaveCardFail: "Не удалось сохранить карту",
                Payframe_Labels_Email_Expanded_NotMandatory: "Ваш e-mail (не обязательно)",
                Payframe_EnterSmsCode: "Введите смс код, полученный от вашего банка",
                Payframe_MP_CardDeleteFail: "Не удалось удалить карту",
                Payframe_ButtonText_PayByCard: "Оплата картой",
                Payframe_CloseWindowManually: "Теперь вы можете закрыть окно.",
                "5005_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                Payframe_Title_Success: "Оплата завершена",
                Payframe_MaximizeButton_Title_Normal: "Нормальный размер",
                ValidationHelper_Validator_Name_TooShort: "Слишком мало символов",
                "3008_extra": "Платеж будет отклонен",
                "5057_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                Payframe_Title_Init: "Введите данные карты для оплаты",
                Payframe_Title_Fail: "Оплата не завершена",
                Payframe_Labels_Email_Note: "Укажите адрес,<br>если вам нужна<br>квитанция об оплате",
                "3002_extra": "Платеж будет отклонен",
                ValidationHelper_Validator_ExpDateMonthYear_Invalid: "Некорректное значение года/месяца",
                Payframe_3DS_WaitForSms: "Дождитесь СМС с кодом от вашего банка и введите в окно ниже",
                "5092_extra": "Повторите попытку позже или воспользуйтесь другой картой",
                Payframe_Code_Processing: "Оплата выполняется",
                Payframe_PoweredBy_Link: "http://cloudpayments.ru",
                Payframe_Tooltips_ExpDate: "Срок действия указан на лицевой стороне карты в виде 4 цифр: месяц / год",
                Payframe_Labels_Expire: "Срок <br>действия:",
                Payframe_ButtonText_Cancel: "Отменить оплату и вернуться к покупкам",
                ValidationHelper_Validator_ExpDateYear_Invalid: "Некорректное значение года",
                Payframe_Labels_Cvv_Note_Multiline: "ПОСЛЕДНИЕ 3&nbsp;или&nbsp;4&nbsp;ЦИФРЫ С&nbsp;ОБРАТНОЙ СТОРОНЫ КАРТЫ",
                Currency_UAH: "грн.",
                Currency_RUB: "руб.",
                Currency_KZT: "тг.",
                "5300_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                Payframe_Labels_SecureConnection: "Безопасное<span></span>соединение",
                Payframe_MP_SavingCardText: "Для сохранения карты подтвердите ваш номер телефона.",
                Payframe_ConfirmClose: "Закрыть окно?",
                Payframe_ButtonText_Processing: "Платёж обрабатывается",
                "5013": "Слишком маленькая или слишком большая сумма операции",
                "5012": "Карта не предназначена для онлайн платежей",
                "5001": "Отказ эмитента проводить онлайн операцию",
                "5005": "Операция отклонена эмитентом",
                "5006": "Отказ сети проводить операцию или неправильный CVV код",
                "5031": "Неизвестный эмитент карты",
                "5030": "Ошибка на стороне эквайера",
                "5034": "Отказ эмитента",
                "5054": "Карта просрочена или неверно указан срок действия",
                "5057": "Ограничение на карте",
                "5051": "Недостаточно средств на карте",
                "5041": "Карта потеряна",
                "5043": "Карта украдена",
                "5065": "Превышен лимит операций по карте",
                "5091": "Эмитент недоступен",
                "5092": "Эмитент недоступен",
                "5096": "Ошибка банка-эквайера или сети",
                "5082": "Неверный CVV код",
                "5206": "3-D Secure авторизация не пройдена",
                "5207": "3-D Secure авторизация недоступна",
                "5204": "Операция не может быть обработана",
                "5300": "Лимиты эквайера на проведение операций",
                "3006": "Сервис недоступен",
                "3007": "Ошибка соединения",
                "3004": "Платеж просрочен",
                "3005": "Платеж не может быть принят",
                "3002": "Некорректный идентификатор плательщика",
                "3003": "Неверная сумма",
                "3001": "Неверный номер заказа",
                "3008": "Платеж не может быть принят",
                "5206_extra": "Свяжитесь с вашим банком или воспользуйтесь другой картой",
                Payframe_ButtonText_Success: "Ok",
            },
        };
        n.localization(i);
    })(cp || (cp = {})),
    (function (n) {
        n.publicKey = {
            version: 2,
            pem:
                "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjU/bq6YZD2H0DUhbtEBg\r\nJIyiurM8eX3aH02/ZWr6VZ27WF93ylWC4cGAe50sSgiA8NCW0G/UL77kAkebJQrJ\r\njVdt7SvDypSPk1mXNK0i9cI9DrdmAHLGLlYJx7eeY6h4JShLhOBnKRghi0S4uL5N\r\nL7W4OUgCeUlGWcmz8ssNEQ5w17rfUF9TxYEFVKFMGN/SSaYNUr4znGt2r97YPsPy\r\n0Sk4dGHhMXr1QGR05UQeVuU43OuRAFxA71YbuCRUYg5ENwKM/1RnNcu8v7kXFA4L\r\nqGV9AncHLIZEOqWgY+4balVXlKIcMVN6W+PXKJpowOyB9QIq1Ec3OMaJ3sGpOppx\r\nKQIDAQAB\r\n-----END PUBLIC KEY-----",
        };
    })(cp || (cp = {})),
    (function (n) {
        function t(n, t, i) {
            n != null && ("number" == typeof n ? this.fromNumber(n, t, i) : t == null && "string" != typeof n ? this.fromString(n, 256) : this.fromString(n, t));
        }
        function i() {
            return new t(null);
        }
        function ri(n, t, i, r, u, f) {
            while (--f >= 0) {
                var e = t * this[n++] + i[r] + u;
                u = Math.floor(e / 67108864);
                i[r++] = e & 67108863;
            }
            return u;
        }
        function ui(n, t, i, r, u, f) {
            for (var o = t & 32767, s = t >> 15; --f >= 0; ) {
                var e = this[n] & 32767,
                    h = this[n++] >> 15,
                    c = s * e + h * o;
                e = o * e + ((c & 32767) << 15) + i[r] + (u & 1073741823);
                u = (e >>> 30) + (c >>> 15) + s * h + (u >>> 30);
                i[r++] = e & 1073741823;
            }
            return u;
        }
        function fi(n, t, i, r, u, f) {
            for (var o = t & 16383, s = t >> 14; --f >= 0; ) {
                var e = this[n] & 16383,
                    h = this[n++] >> 14,
                    c = s * e + h * o;
                e = o * e + ((c & 16383) << 14) + i[r] + u;
                u = (e >> 28) + (c >> 14) + s * h;
                i[r++] = e & 268435455;
            }
            return u;
        }
        function h(n) {
            return wt.charAt(n);
        }
        function bt(n, t) {
            var i = g[n.charCodeAt(t)];
            return i == null ? -1 : i;
        }
        function ei(n) {
            for (var t = this.t - 1; t >= 0; --t) n[t] = this[t];
            n.t = this.t;
            n.s = this.s;
        }
        function oi(n) {
            this.t = 1;
            this.s = n < 0 ? -1 : 0;
            n > 0 ? (this[0] = n) : n < -1 ? (this[0] = n + DV) : (this.t = 0);
        }
        function l(n) {
            var t = i();
            return t.fromInt(n), t;
        }
        function si(n, i) {
            var u, f;
            if (i == 16) u = 4;
            else if (i == 8) u = 3;
            else if (i == 256) u = 8;
            else if (i == 2) u = 1;
            else if (i == 32) u = 5;
            else if (i == 4) u = 2;
            else {
                this.fromRadix(n, i);
                return;
            }
            this.t = 0;
            this.s = 0;
            for (var e = n.length, o = !1, r = 0; --e >= 0; ) {
                if (((f = u == 8 ? n[e] & 255 : bt(n, e)), f < 0)) {
                    n.charAt(e) == "-" && (o = !0);
                    continue;
                }
                o = !1;
                r == 0 ? (this[this.t++] = f) : r + u > this.DB ? ((this[this.t - 1] |= (f & ((1 << (this.DB - r)) - 1)) << r), (this[this.t++] = f >> (this.DB - r))) : (this[this.t - 1] |= f << r);
                r += u;
                r >= this.DB && (r -= this.DB);
            }
            u == 8 && (n[0] & 128) != 0 && ((this.s = -1), r > 0 && (this[this.t - 1] |= ((1 << (this.DB - r)) - 1) << r));
            this.clamp();
            o && t.ZERO.subTo(this, this);
        }
        function hi() {
            for (var n = this.s & this.DM; this.t > 0 && this[this.t - 1] == n; ) --this.t;
        }
        function ci(n) {
            var t;
            if (this.s < 0) return "-" + this.negate().toString(n);
            if (n == 16) t = 4;
            else if (n == 8) t = 3;
            else if (n == 2) t = 1;
            else if (n == 32) t = 5;
            else if (n == 4) t = 2;
            else return this.toRadix(n);
            var o = (1 << t) - 1,
                u,
                f = !1,
                e = "",
                r = this.t,
                i = this.DB - ((r * this.DB) % t);
            if (r-- > 0)
                for (i < this.DB && (u = this[r] >> i) > 0 && ((f = !0), (e = h(u))); r >= 0; )
                    i < t ? (u = ((this[r] & ((1 << i) - 1)) << (t - i)) | (this[--r] >> (i += this.DB - t))) : ((u = (this[r] >> (i -= t)) & o), i <= 0 && ((i += this.DB), --r)), u > 0 && (f = !0), f && (e += h(u));
            return f ? e : "0";
        }
        function li() {
            var n = i();
            return t.ZERO.subTo(this, n), n;
        }
        function ai() {
            return this.s < 0 ? this.negate() : this;
        }
        function vi(n) {
            var t = this.s - n.s,
                i;
            if (t != 0) return t;
            if (((i = this.t), (t = i - n.t), t != 0)) return this.s < 0 ? -t : t;
            while (--i >= 0) if ((t = this[i] - n[i]) != 0) return t;
            return 0;
        }
        function rt(n) {
            var i = 1,
                t;
            return (t = n >>> 16) != 0 && ((n = t), (i += 16)), (t = n >> 8) != 0 && ((n = t), (i += 8)), (t = n >> 4) != 0 && ((n = t), (i += 4)), (t = n >> 2) != 0 && ((n = t), (i += 2)), (t = n >> 1) != 0 && ((n = t), (i += 1)), i;
        }
        function yi() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + rt(this[this.t - 1] ^ (this.s & this.DM));
        }
        function pi(n, t) {
            for (var i = this.t - 1; i >= 0; --i) t[i + n] = this[i];
            for (i = n - 1; i >= 0; --i) t[i] = 0;
            t.t = this.t + n;
            t.s = this.s;
        }
        function wi(n, t) {
            for (var i = n; i < this.t; ++i) t[i - n] = this[i];
            t.t = Math.max(this.t - n, 0);
            t.s = this.s;
        }
        function bi(n, t) {
            for (var u = n % this.DB, e = this.DB - u, o = (1 << e) - 1, r = Math.floor(n / this.DB), f = (this.s << u) & this.DM, i = this.t - 1; i >= 0; --i) (t[i + r + 1] = (this[i] >> e) | f), (f = (this[i] & o) << u);
            for (i = r - 1; i >= 0; --i) t[i] = 0;
            t[r] = f;
            t.t = this.t + r + 1;
            t.s = this.s;
            t.clamp();
        }
        function ki(n, t) {
            var i, r;
            if (((t.s = this.s), (i = Math.floor(n / this.DB)), i >= this.t)) {
                t.t = 0;
                return;
            }
            var u = n % this.DB,
                f = this.DB - u,
                e = (1 << u) - 1;
            for (t[0] = this[i] >> u, r = i + 1; r < this.t; ++r) (t[r - i - 1] |= (this[r] & e) << f), (t[r - i] = this[r] >> u);
            u > 0 && (t[this.t - i - 1] |= (this.s & e) << f);
            t.t = this.t - i;
            t.clamp();
        }
        function di(n, t) {
            for (var r = 0, i = 0, u = Math.min(n.t, this.t); r < u; ) (i += this[r] - n[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            if (n.t < this.t) {
                for (i -= n.s; r < this.t; ) (i += this[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                i += this.s;
            } else {
                for (i += this.s; r < n.t; ) (i -= n[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                i -= n.s;
            }
            t.s = i < 0 ? -1 : 0;
            i < -1 ? (t[r++] = this.DV + i) : i > 0 && (t[r++] = i);
            t.t = r;
            t.clamp();
        }
        function gi(n, i) {
            var u = this.abs(),
                f = n.abs(),
                r = u.t;
            for (i.t = r + f.t; --r >= 0; ) i[r] = 0;
            for (r = 0; r < f.t; ++r) i[r + u.t] = u.am(0, f[r], i, r, 0, u.t);
            i.s = 0;
            i.clamp();
            this.s != n.s && t.ZERO.subTo(i, i);
        }
        function nr(n) {
            for (var i = this.abs(), t = (n.t = 2 * i.t), r; --t >= 0; ) n[t] = 0;
            for (t = 0; t < i.t - 1; ++t) (r = i.am(t, i[t], n, 2 * t, 0, 1)), (n[t + i.t] += i.am(t + 1, 2 * i[t], n, 2 * t + 1, r, i.t - t - 1)) >= i.DV && ((n[t + i.t] -= i.DV), (n[t + i.t + 1] = 1));
            n.t > 0 && (n[n.t - 1] += i.am(t, i[t], n, 2 * t, 0, 1));
            n.s = 0;
            n.clamp();
        }
        function tr(n, r, u) {
            var s = n.abs(),
                l,
                e,
                a,
                y;
            if (!(s.t <= 0)) {
                if (((l = this.abs()), l.t < s.t)) {
                    r != null && r.fromInt(0);
                    u != null && this.copyTo(u);
                    return;
                }
                u == null && (u = i());
                var f = i(),
                    p = this.s,
                    b = n.s,
                    c = this.DB - rt(s[s.t - 1]);
                if ((c > 0 ? (s.lShiftTo(c, f), l.lShiftTo(c, u)) : (s.copyTo(f), l.copyTo(u)), (e = f.t), (a = f[e - 1]), a != 0)) {
                    var w = a * (1 << this.F1) + (e > 1 ? f[e - 2] >> this.F2 : 0),
                        k = this.FV / w,
                        d = (1 << this.F1) / w,
                        g = 1 << this.F2,
                        h = u.t,
                        v = h - e,
                        o = r == null ? i() : r;
                    for (f.dlShiftTo(v, o), u.compareTo(o) >= 0 && ((u[u.t++] = 1), u.subTo(o, u)), t.ONE.dlShiftTo(e, o), o.subTo(f, f); f.t < e; ) f[f.t++] = 0;
                    while (--v >= 0) if (((y = u[--h] == a ? this.DM : Math.floor(u[h] * k + (u[h - 1] + g) * d)), (u[h] += f.am(0, y, u, v, 0, e)) < y)) for (f.dlShiftTo(v, o), u.subTo(o, u); u[h] < --y; ) u.subTo(o, u);
                    r != null && (u.drShiftTo(e, r), p != b && t.ZERO.subTo(r, r));
                    u.t = e;
                    u.clamp();
                    c > 0 && u.rShiftTo(c, u);
                    p < 0 && t.ZERO.subTo(u, u);
                }
            }
        }
        function ir(n) {
            var r = i();
            return this.abs().divRemTo(n, null, r), this.s < 0 && r.compareTo(t.ZERO) > 0 && n.subTo(r, r), r;
        }
        function y(n) {
            this.m = n;
        }
        function rr(n) {
            return n.s < 0 || n.compareTo(this.m) >= 0 ? n.mod(this.m) : n;
        }
        function ur(n) {
            return n;
        }
        function fr(n) {
            n.divRemTo(this.m, null, n);
        }
        function er(n, t, i) {
            n.multiplyTo(t, i);
            this.reduce(i);
        }
        function or(n, t) {
            n.squareTo(t);
            this.reduce(t);
        }
        function sr() {
            var t, n;
            return this.t < 1
                ? 0
                : ((t = this[0]), (t & 1) == 0)
                ? 0
                : ((n = t & 3), (n = (n * (2 - (t & 15) * n)) & 15), (n = (n * (2 - (t & 255) * n)) & 255), (n = (n * (2 - (((t & 65535) * n) & 65535))) & 65535), (n = (n * (2 - ((t * n) % this.DV))) % this.DV), n > 0 ? this.DV - n : -n);
        }
        function p(n) {
            this.m = n;
            this.mp = n.invDigit();
            this.mpl = this.mp & 32767;
            this.mph = this.mp >> 15;
            this.um = (1 << (n.DB - 15)) - 1;
            this.mt2 = 2 * n.t;
        }
        function hr(n) {
            var r = i();
            return n.abs().dlShiftTo(this.m.t, r), r.divRemTo(this.m, null, r), n.s < 0 && r.compareTo(t.ZERO) > 0 && this.m.subTo(r, r), r;
        }
        function cr(n) {
            var t = i();
            return n.copyTo(t), this.reduce(t), t;
        }
        function lr(n) {
            for (var i, t, r; n.t <= this.mt2; ) n[n.t++] = 0;
            for (i = 0; i < this.m.t; ++i)
                for (t = n[i] & 32767, r = (t * this.mpl + (((t * this.mph + (n[i] >> 15) * this.mpl) & this.um) << 15)) & n.DM, t = i + this.m.t, n[t] += this.m.am(0, r, n, i, 0, this.m.t); n[t] >= n.DV; ) (n[t] -= n.DV), n[++t]++;
            n.clamp();
            n.drShiftTo(this.m.t, n);
            n.compareTo(this.m) >= 0 && n.subTo(this.m, n);
        }
        function ar(n, t) {
            n.squareTo(t);
            this.reduce(t);
        }
        function vr(n, t, i) {
            n.multiplyTo(t, i);
            this.reduce(i);
        }
        function yr() {
            return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function pr(n, r) {
            var s;
            if (n > 4294967295 || n < 1) return t.ONE;
            var u = i(),
                f = i(),
                e = r.convert(this),
                o = rt(n) - 1;
            for (e.copyTo(u); --o >= 0; ) r.sqrTo(u, f), (n & (1 << o)) > 0 ? r.mulTo(f, e, u) : ((s = u), (u = f), (f = s));
            return r.revert(u);
        }
        function wr(n, t) {
            var i;
            return (i = n < 256 || t.isEven() ? new y(t) : new p(t)), this.exp(n, i);
        }
        function br() {
            var n = i();
            return this.copyTo(n), n;
        }
        function kr() {
            if (this.s < 0) {
                if (this.t == 1) return this[0] - this.DV;
                if (this.t == 0) return -1;
            } else {
                if (this.t == 1) return this[0];
                if (this.t == 0) return 0;
            }
            return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function dr() {
            return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function gr() {
            return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function nu(n) {
            return Math.floor((Math.LN2 * this.DB) / Math.log(n));
        }
        function tu() {
            return this.s < 0 ? -1 : this.t <= 0 || (this.t == 1 && this[0] <= 0) ? 0 : 1;
        }
        function iu(n) {
            if ((n == null && (n = 10), this.signum() == 0 || n < 2 || n > 36)) return "0";
            var o = this.chunkSize(n),
                f = Math.pow(n, o),
                e = l(f),
                t = i(),
                r = i(),
                u = "";
            for (this.divRemTo(e, t, r); t.signum() > 0; ) (u = (f + r.intValue()).toString(n).substr(1) + u), t.divRemTo(e, t, r);
            return r.intValue().toString(n) + u;
        }
        function ru(n, i) {
            var u, e;
            this.fromInt(0);
            i == null && (i = 10);
            var o = this.chunkSize(i),
                h = Math.pow(i, o),
                s = !1,
                f = 0,
                r = 0;
            for (u = 0; u < n.length; ++u) {
                if (((e = bt(n, u)), e < 0)) {
                    n.charAt(u) == "-" && this.signum() == 0 && (s = !0);
                    continue;
                }
                r = i * r + e;
                ++f >= o && (this.dMultiply(h), this.dAddOffset(r, 0), (f = 0), (r = 0));
            }
            f > 0 && (this.dMultiply(Math.pow(i, f)), this.dAddOffset(r, 0));
            s && t.ZERO.subTo(this, this);
        }
        function uu(n, i, r) {
            if ("number" == typeof i)
                if (n < 2) this.fromInt(1);
                else
                    for (this.fromNumber(n, r), this.testBit(n - 1) || this.bitwiseTo(t.ONE.shiftLeft(n - 1), ut, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i); )
                        this.dAddOffset(2, 0), this.bitLength() > n && this.subTo(t.ONE.shiftLeft(n - 1), this);
            else {
                var u = [],
                    f = n & 7;
                u.length = (n >> 3) + 1;
                i.nextBytes(u);
                f > 0 ? (u[0] &= (1 << f) - 1) : (u[0] = 0);
                this.fromString(u, 256);
            }
        }
        function fu() {
            var i = this.t,
                u = [],
                n,
                t,
                r;
            if (((u[0] = this.s), (n = this.DB - ((i * this.DB) % 8)), (r = 0), i-- > 0))
                for (n < this.DB && (t = this[i] >> n) != (this.s & this.DM) >> n && (u[r++] = t | (this.s << (this.DB - n))); i >= 0; )
                    n < 8 ? (t = ((this[i] & ((1 << n) - 1)) << (8 - n)) | (this[--i] >> (n += this.DB - 8))) : ((t = (this[i] >> (n -= 8)) & 255), n <= 0 && ((n += this.DB), --i)),
                        (t & 128) != 0 && (t |= -256),
                        r == 0 && (this.s & 128) != (t & 128) && ++r,
                        (r > 0 || t != this.s) && (u[r++] = t);
            return u;
        }
        function eu(n) {
            return this.compareTo(n) == 0;
        }
        function ou(n) {
            return this.compareTo(n) < 0 ? this : n;
        }
        function su(n) {
            return this.compareTo(n) > 0 ? this : n;
        }
        function hu(n, t, i) {
            for (var u, f = Math.min(n.t, this.t), r = 0; r < f; ++r) i[r] = t(this[r], n[r]);
            if (n.t < this.t) {
                for (u = n.s & this.DM, r = f; r < this.t; ++r) i[r] = t(this[r], u);
                i.t = this.t;
            } else {
                for (u = this.s & this.DM, r = f; r < n.t; ++r) i[r] = t(u, n[r]);
                i.t = n.t;
            }
            i.s = t(this.s, n.s);
            i.clamp();
        }
        function cu(n, t) {
            return n & t;
        }
        function lu(n) {
            var t = i();
            return this.bitwiseTo(n, cu, t), t;
        }
        function ut(n, t) {
            return n | t;
        }
        function au(n) {
            var t = i();
            return this.bitwiseTo(n, ut, t), t;
        }
        function kt(n, t) {
            return n ^ t;
        }
        function vu(n) {
            var t = i();
            return this.bitwiseTo(n, kt, t), t;
        }
        function dt(n, t) {
            return n & ~t;
        }
        function yu(n) {
            var t = i();
            return this.bitwiseTo(n, dt, t), t;
        }
        function pu() {
            for (var n = i(), t = 0; t < this.t; ++t) n[t] = this.DM & ~this[t];
            return (n.t = this.t), (n.s = ~this.s), n;
        }
        function wu(n) {
            var t = i();
            return n < 0 ? this.rShiftTo(-n, t) : this.lShiftTo(n, t), t;
        }
        function bu(n) {
            var t = i();
            return n < 0 ? this.lShiftTo(-n, t) : this.rShiftTo(n, t), t;
        }
        function ku(n) {
            if (n == 0) return -1;
            var t = 0;
            return (n & 65535) == 0 && ((n >>= 16), (t += 16)), (n & 255) == 0 && ((n >>= 8), (t += 8)), (n & 15) == 0 && ((n >>= 4), (t += 4)), (n & 3) == 0 && ((n >>= 2), (t += 2)), (n & 1) == 0 && ++t, t;
        }
        function du() {
            for (var n = 0; n < this.t; ++n) if (this[n] != 0) return n * this.DB + ku(this[n]);
            return this.s < 0 ? this.t * this.DB : -1;
        }
        function gu(n) {
            for (var t = 0; n != 0; ) (n &= n - 1), ++t;
            return t;
        }
        function nf() {
            for (var t = 0, i = this.s & this.DM, n = 0; n < this.t; ++n) t += gu(this[n] ^ i);
            return t;
        }
        function tf(n) {
            var t = Math.floor(n / this.DB);
            return t >= this.t ? this.s != 0 : (this[t] & (1 << n % this.DB)) != 0;
        }
        function rf(n, i) {
            var r = t.ONE.shiftLeft(n);
            return this.bitwiseTo(r, i, r), r;
        }
        function uf(n) {
            return this.changeBit(n, ut);
        }
        function ff(n) {
            return this.changeBit(n, dt);
        }
        function ef(n) {
            return this.changeBit(n, kt);
        }
        function of(n, t) {
            for (var r = 0, i = 0, u = Math.min(n.t, this.t); r < u; ) (i += this[r] + n[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            if (n.t < this.t) {
                for (i += n.s; r < this.t; ) (i += this[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                i += this.s;
            } else {
                for (i += this.s; r < n.t; ) (i += n[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                i += n.s;
            }
            t.s = i < 0 ? -1 : 0;
            i > 0 ? (t[r++] = i) : i < -1 && (t[r++] = this.DV + i);
            t.t = r;
            t.clamp();
        }
        function sf(n) {
            var t = i();
            return this.addTo(n, t), t;
        }
        function hf(n) {
            var t = i();
            return this.subTo(n, t), t;
        }
        function cf(n) {
            var t = i();
            return this.multiplyTo(n, t), t;
        }
        function lf() {
            var n = i();
            return this.squareTo(n), n;
        }
        function af(n) {
            var t = i();
            return this.divRemTo(n, t, null), t;
        }
        function vf(n) {
            var t = i();
            return this.divRemTo(n, null, t), t;
        }
        function yf(n) {
            var t = i(),
                r = i();
            return this.divRemTo(n, t, r), [t, r];
        }
        function pf(n) {
            this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
            ++this.t;
            this.clamp();
        }
        function wf(n, t) {
            if (n != 0) {
                while (this.t <= t) this[this.t++] = 0;
                for (this[t] += n; this[t] >= this.DV; ) (this[t] -= this.DV), ++t >= this.t && (this[this.t++] = 0), ++this[t];
            }
        }
        function nt() {}
        function gt(n) {
            return n;
        }
        function bf(n, t, i) {
            n.multiplyTo(t, i);
        }
        function kf(n, t) {
            n.squareTo(t);
        }
        function df(n) {
            return this.exp(n, new nt());
        }
        function gf(n, t, i) {
            var r = Math.min(this.t + n.t, t),
                u;
            for (i.s = 0, i.t = r; r > 0; ) i[--r] = 0;
            for (u = i.t - this.t; r < u; ++r) i[r + this.t] = this.am(0, n[r], i, r, 0, this.t);
            for (u = Math.min(n.t, t); r < u; ++r) this.am(0, n[r], i, r, 0, t - r);
            i.clamp();
        }
        function ne(n, t, i) {
            --t;
            var r = (i.t = this.t + n.t - t);
            for (i.s = 0; --r >= 0; ) i[r] = 0;
            for (r = Math.max(t - this.t, 0); r < n.t; ++r) i[this.t + r - t] = this.am(t - r, n[r], i, 0, 0, this.t + r - t);
            i.clamp();
            i.drShiftTo(1, i);
        }
        function k(n) {
            this.r2 = i();
            this.q3 = i();
            t.ONE.dlShiftTo(2 * n.t, this.r2);
            this.mu = this.r2.divide(n);
            this.m = n;
        }
        function te(n) {
            if (n.s < 0 || n.t > 2 * this.m.t) return n.mod(this.m);
            if (n.compareTo(this.m) < 0) return n;
            var t = i();
            return n.copyTo(t), this.reduce(t), t;
        }
        function ie(n) {
            return n;
        }
        function re(n) {
            for (
                n.drShiftTo(this.m.t - 1, this.r2), n.t > this.m.t + 1 && ((n.t = this.m.t + 1), n.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                n.compareTo(this.r2) < 0;

            )
                n.dAddOffset(1, this.m.t + 1);
            for (n.subTo(this.r2, n); n.compareTo(this.m) >= 0; ) n.subTo(this.m, n);
        }
        function ue(n, t) {
            n.squareTo(t);
            this.reduce(t);
        }
        function fe(n, t, i) {
            n.multiplyTo(t, i);
            this.reduce(i);
        }
        function ee(n, t) {
            var r = n.bitLength(),
                a,
                u = l(1),
                e,
                b;
            if (r <= 0) return u;
            a = r < 18 ? 1 : r < 48 ? 3 : r < 144 ? 4 : r < 768 ? 5 : 6;
            e = r < 8 ? new y(t) : t.isEven() ? new k(t) : new p(t);
            var h = [],
                f = 3,
                v = a - 1,
                d = (1 << a) - 1;
            if (((h[1] = e.convert(this)), a > 1)) for (b = i(), e.sqrTo(h[1], b); f <= d; ) (h[f] = i()), e.mulTo(b, h[f - 2], h[f]), (f += 2);
            var o = n.t - 1,
                c,
                g = !0,
                s = i(),
                w;
            for (r = rt(n[o]) - 1; o >= 0; ) {
                for (r >= v ? (c = (n[o] >> (r - v)) & d) : ((c = (n[o] & ((1 << (r + 1)) - 1)) << (v - r)), o > 0 && (c |= n[o - 1] >> (this.DB + r - v))), f = a; (c & 1) == 0; ) (c >>= 1), --f;
                if (((r -= f) < 0 && ((r += this.DB), --o), g)) h[c].copyTo(u), (g = !1);
                else {
                    while (f > 1) e.sqrTo(u, s), e.sqrTo(s, u), (f -= 2);
                    f > 0 ? e.sqrTo(u, s) : ((w = u), (u = s), (s = w));
                    e.mulTo(s, h[c], u);
                }
                while (o >= 0 && (n[o] & (1 << r)) == 0) e.sqrTo(u, s), (w = u), (u = s), (s = w), --r < 0 && ((r = this.DB - 1), --o);
            }
            return e.revert(u);
        }
        function oe(n) {
            var i = this.s < 0 ? this.negate() : this.clone(),
                t = n.s < 0 ? n.negate() : n.clone(),
                f,
                u,
                r;
            if ((i.compareTo(t) < 0 && ((f = i), (i = t), (t = f)), (u = i.getLowestSetBit()), (r = t.getLowestSetBit()), r < 0)) return i;
            for (u < r && (r = u), r > 0 && (i.rShiftTo(r, i), t.rShiftTo(r, t)); i.signum() > 0; )
                (u = i.getLowestSetBit()) > 0 && i.rShiftTo(u, i), (u = t.getLowestSetBit()) > 0 && t.rShiftTo(u, t), i.compareTo(t) >= 0 ? (i.subTo(t, i), i.rShiftTo(1, i)) : (t.subTo(i, t), t.rShiftTo(1, t));
            return r > 0 && t.lShiftTo(r, t), t;
        }
        function se(n) {
            var r, t, i;
            if (n <= 0) return 0;
            if (((r = this.DV % n), (t = this.s < 0 ? n - 1 : 0), this.t > 0))
                if (r == 0) t = this[0] % n;
                else for (i = this.t - 1; i >= 0; --i) t = (r * t + this[i]) % n;
            return t;
        }
        function he(n) {
            var s = n.isEven();
            if ((this.isEven() && s) || n.signum() == 0) return t.ZERO;
            for (var u = n.clone(), f = this.clone(), e = l(1), r = l(0), o = l(0), i = l(1); u.signum() != 0; ) {
                while (u.isEven()) u.rShiftTo(1, u), s ? ((e.isEven() && r.isEven()) || (e.addTo(this, e), r.subTo(n, r)), e.rShiftTo(1, e)) : r.isEven() || r.subTo(n, r), r.rShiftTo(1, r);
                while (f.isEven()) f.rShiftTo(1, f), s ? ((o.isEven() && i.isEven()) || (o.addTo(this, o), i.subTo(n, i)), o.rShiftTo(1, o)) : i.isEven() || i.subTo(n, i), i.rShiftTo(1, i);
                u.compareTo(f) >= 0 ? (u.subTo(f, u), s && e.subTo(o, e), r.subTo(i, r)) : (f.subTo(u, f), s && o.subTo(e, o), i.subTo(r, i));
            }
            if (f.compareTo(t.ONE) != 0) return t.ZERO;
            if (i.compareTo(n) >= 0) return i.subtract(n);
            if (i.signum() < 0) i.addTo(n, i);
            else return i;
            return i.signum() < 0 ? i.add(n) : i;
        }
        function ce(n) {
            var t,
                i = this.abs(),
                r,
                u;
            if (i.t == 1 && i[0] <= e[e.length - 1]) {
                for (t = 0; t < e.length; ++t) if (i[0] == e[t]) return !0;
                return !1;
            }
            if (i.isEven()) return !1;
            for (t = 1; t < e.length; ) {
                for (r = e[t], u = t + 1; u < e.length && r < ni; ) r *= e[u++];
                for (r = i.modInt(r); t < u; ) if (r % e[t++] == 0) return !1;
            }
            return i.millerRabin(n);
        }
        function le(n) {
            var u = this.subtract(t.ONE),
                f = u.getLowestSetBit(),
                h,
                o,
                s,
                r,
                c;
            if (f <= 0) return !1;
            for (h = u.shiftRight(f), n = (n + 1) >> 1, n > e.length && (n = e.length), o = i(), s = 0; s < n; ++s)
                if ((o.fromInt(e[Math.floor(Math.random() * e.length)]), (r = o.modPow(h, this)), r.compareTo(t.ONE) != 0 && r.compareTo(u) != 0)) {
                    for (c = 1; c++ < f && r.compareTo(u) != 0; ) if (((r = r.modPowInt(2, this)), r.compareTo(t.ONE) == 0)) return !1;
                    if (r.compareTo(u) != 0) return !1;
                }
            return !0;
        }
        function ht() {
            this.i = 0;
            this.j = 0;
            this.S = [];
        }
        function ae(n) {
            for (var i, r, t = 0; t < 256; ++t) this.S[t] = t;
            for (i = 0, t = 0; t < 256; ++t) (i = (i + this.S[t] + n[t % n.length]) & 255), (r = this.S[t]), (this.S[t] = this.S[i]), (this.S[i] = r);
            this.i = 0;
            this.j = 0;
        }
        function ve() {
            var n;
            return (this.i = (this.i + 1) & 255), (this.j = (this.j + this.S[this.i]) & 255), (n = this.S[this.i]), (this.S[this.i] = this.S[this.j]), (this.S[this.j] = n), this.S[(n + this.S[this.i]) & 255];
        }
        function ye() {
            return new ht();
        }
        function pe() {
            if (ft == null) {
                for (ft = ye(); s < ct; ) {
                    var n = Math.floor(65536 * Math.random());
                    a[s++] = n & 255;
                }
                for (ft.init(a), s = 0; s < a.length; ++s) a[s] = 0;
                s = 0;
            }
            return ft.next();
        }
        function we(n) {
            for (var t = 0; t < n.length; ++t) n[t] = pe();
        }
        function st() {}
        function f(n, i) {
            return new t(n, i);
        }
        function be(n, i) {
            var r, e, u, o, f;
            if (i < n.length + 11) return console.error("Message too long for RSA"), null;
            for (r = [], e = n.length - 1; e >= 0 && i > 0; )
                (u = n.charCodeAt(e--)), u < 128 ? (r[--i] = u) : u > 127 && u < 2048 ? ((r[--i] = (u & 63) | 128), (r[--i] = (u >> 6) | 192)) : ((r[--i] = (u & 63) | 128), (r[--i] = ((u >> 6) & 63) | 128), (r[--i] = (u >> 12) | 224));
            for (r[--i] = 0, o = new st(), f = []; i > 2; ) {
                for (f[0] = 0; f[0] == 0; ) o.nextBytes(f);
                r[--i] = f[0];
            }
            return (r[--i] = 2), (r[--i] = 0), new t(r);
        }
        function u() {
            this.n = null;
            this.e = 0;
            this.d = null;
            this.p = null;
            this.q = null;
            this.dmp1 = null;
            this.dmq1 = null;
            this.coeff = null;
        }
        function ke(n, t) {
            n != null && t != null && n.length > 0 && t.length > 0 ? ((this.n = f(n, 16)), (this.e = parseInt(t, 16))) : console.error("Invalid RSA public key");
        }
        function de(n) {
            return n.modPowInt(this.e, this.n);
        }
        function ge(n) {
            var r = be(n, (this.n.bitLength() + 7) >> 3),
                i,
                t;
            return r == null ? null : ((i = this.doPublic(r)), i == null) ? null : ((t = i.toString(16)), (t.length & 1) == 0 ? t : "0" + t);
        }
        function no(n, t) {
            for (var r = n.toByteArray(), i = 0, f, u; i < r.length && r[i] == 0; ) ++i;
            if (r.length - i != t - 1 || r[i] != 2) return null;
            for (++i; r[i] != 0; ) if (++i >= r.length) return null;
            for (f = ""; ++i < r.length; )
                (u = r[i] & 255),
                    u < 128
                        ? (f += String.fromCharCode(u))
                        : u > 191 && u < 224
                        ? ((f += String.fromCharCode(((u & 31) << 6) | (r[i + 1] & 63))), ++i)
                        : ((f += String.fromCharCode(((u & 15) << 12) | ((r[i + 1] & 63) << 6) | (r[i + 2] & 63))), (i += 2));
            return f;
        }
        function to(n, t, i) {
            n != null && t != null && n.length > 0 && t.length > 0 ? ((this.n = f(n, 16)), (this.e = parseInt(t, 16)), (this.d = f(i, 16))) : console.error("Invalid RSA private key");
        }
        function io(n, t, i, r, u, e, o, s) {
            n != null && t != null && n.length > 0 && t.length > 0
                ? ((this.n = f(n, 16)), (this.e = parseInt(t, 16)), (this.d = f(i, 16)), (this.p = f(r, 16)), (this.q = f(u, 16)), (this.dmp1 = f(e, 16)), (this.dmq1 = f(o, 16)), (this.coeff = f(s, 16)))
                : console.error("Invalid RSA private key");
        }
        function ro(n, i) {
            var u = new st(),
                f = n >> 1,
                r,
                e;
            for (this.e = parseInt(i, 16), r = new t(i, 16); ; ) {
                for (;;) if (((this.p = new t(n - f, 1, u)), this.p.subtract(t.ONE).gcd(r).compareTo(t.ONE) == 0 && this.p.isProbablePrime(10))) break;
                for (;;) if (((this.q = new t(f, 1, u)), this.q.subtract(t.ONE).gcd(r).compareTo(t.ONE) == 0 && this.q.isProbablePrime(10))) break;
                this.p.compareTo(this.q) <= 0 && ((e = this.p), (this.p = this.q), (this.q = e));
                var o = this.p.subtract(t.ONE),
                    s = this.q.subtract(t.ONE),
                    h = o.multiply(s);
                if (h.gcd(r).compareTo(t.ONE) == 0) {
                    this.n = this.p.multiply(this.q);
                    this.d = r.modInverse(h);
                    this.dmp1 = this.d.mod(o);
                    this.dmq1 = this.d.mod(s);
                    this.coeff = this.q.modInverse(this.p);
                    break;
                }
            }
        }
        function uo(n) {
            if (this.p == null || this.q == null) return n.modPow(this.d, this.n);
            for (var t = n.mod(this.p).modPow(this.dmp1, this.p), i = n.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(i) < 0; ) t = t.add(this.p);
            return t.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
        }
        function fo(n) {
            var i = f(n, 16),
                t = this.doPrivate(i);
            return t == null ? null : no(t, (this.n.bitLength() + 7) >> 3);
        }
        function at(n) {
            for (var i, r = "", t = 0; t + 3 <= n.length; t += 3) (i = parseInt(n.substring(t, t + 3), 16)), (r += w.charAt(i >> 6) + w.charAt(i & 63));
            for (
                t + 1 == n.length ? ((i = parseInt(n.substring(t, t + 1), 16)), (r += w.charAt(i << 2))) : t + 2 == n.length && ((i = parseInt(n.substring(t, t + 2), 16)), (r += w.charAt(i >> 2) + w.charAt((i & 3) << 4)));
                (r.length & 3) > 0;

            )
                r += lt;
            return r;
        }
        function ti(n) {
            for (var t = "", i = 0, r, u = 0; u < n.length; ++u) {
                if (n.charAt(u) == lt) break;
                ((v = w.indexOf(n.charAt(u))), v < 0) ||
                    (i == 0
                        ? ((t += h(v >> 2)), (r = v & 3), (i = 1))
                        : i == 1
                        ? ((t += h((r << 2) | (v >> 4))), (r = v & 15), (i = 2))
                        : i == 2
                        ? ((t += h(r)), (t += h(v >> 2)), (r = v & 3), (i = 3))
                        : ((t += h((r << 2) | (v >> 4))), (t += h(v & 15)), (i = 0)));
            }
            return i == 1 && (t += h(r << 2)), t;
        }
        var c,
            pt = (0xdeadbeefcafe & 16777215) == 15715070,
            it,
            wt,
            g,
            b,
            o,
            e,
            ni,
            ct,
            ft,
            a,
            s,
            et,
            ot,
            tt,
            w,
            lt,
            r,
            d;
        for (
            pt && navigator.appName == "Microsoft Internet Explorer" ? ((t.prototype.am = ui), (c = 30)) : pt && navigator.appName != "Netscape" ? ((t.prototype.am = ri), (c = 26)) : ((t.prototype.am = fi), (c = 28)),
                t.prototype.DB = c,
                t.prototype.DM = (1 << c) - 1,
                t.prototype.DV = 1 << c,
                it = 52,
                t.prototype.FV = Math.pow(2, it),
                t.prototype.F1 = it - c,
                t.prototype.F2 = 2 * c - it,
                wt = "0123456789abcdefghijklmnopqrstuvwxyz",
                g = [],
                b = "0".charCodeAt(0),
                o = 0;
            o <= 9;
            ++o
        )
            g[b++] = o;
        for (b = "a".charCodeAt(0), o = 10; o < 36; ++o) g[b++] = o;
        for (b = "A".charCodeAt(0), o = 10; o < 36; ++o) g[b++] = o;
        if (
            ((y.prototype.convert = rr),
            (y.prototype.revert = ur),
            (y.prototype.reduce = fr),
            (y.prototype.mulTo = er),
            (y.prototype.sqrTo = or),
            (p.prototype.convert = hr),
            (p.prototype.revert = cr),
            (p.prototype.reduce = lr),
            (p.prototype.mulTo = vr),
            (p.prototype.sqrTo = ar),
            (t.prototype.copyTo = ei),
            (t.prototype.fromInt = oi),
            (t.prototype.fromString = si),
            (t.prototype.clamp = hi),
            (t.prototype.dlShiftTo = pi),
            (t.prototype.drShiftTo = wi),
            (t.prototype.lShiftTo = bi),
            (t.prototype.rShiftTo = ki),
            (t.prototype.subTo = di),
            (t.prototype.multiplyTo = gi),
            (t.prototype.squareTo = nr),
            (t.prototype.divRemTo = tr),
            (t.prototype.invDigit = sr),
            (t.prototype.isEven = yr),
            (t.prototype.exp = pr),
            (t.prototype.toString = ci),
            (t.prototype.negate = li),
            (t.prototype.abs = ai),
            (t.prototype.compareTo = vi),
            (t.prototype.bitLength = yi),
            (t.prototype.mod = ir),
            (t.prototype.modPowInt = wr),
            (t.ZERO = l(0)),
            (t.ONE = l(1)),
            (nt.prototype.convert = gt),
            (nt.prototype.revert = gt),
            (nt.prototype.mulTo = bf),
            (nt.prototype.sqrTo = kf),
            (k.prototype.convert = te),
            (k.prototype.revert = ie),
            (k.prototype.reduce = re),
            (k.prototype.mulTo = fe),
            (k.prototype.sqrTo = ue),
            (e = [
                2,
                3,
                5,
                7,
                11,
                13,
                17,
                19,
                23,
                29,
                31,
                37,
                41,
                43,
                47,
                53,
                59,
                61,
                67,
                71,
                73,
                79,
                83,
                89,
                97,
                101,
                103,
                107,
                109,
                113,
                127,
                131,
                137,
                139,
                149,
                151,
                157,
                163,
                167,
                173,
                179,
                181,
                191,
                193,
                197,
                199,
                211,
                223,
                227,
                229,
                233,
                239,
                241,
                251,
                257,
                263,
                269,
                271,
                277,
                281,
                283,
                293,
                307,
                311,
                313,
                317,
                331,
                337,
                347,
                349,
                353,
                359,
                367,
                373,
                379,
                383,
                389,
                397,
                401,
                409,
                419,
                421,
                431,
                433,
                439,
                443,
                449,
                457,
                461,
                463,
                467,
                479,
                487,
                491,
                499,
                503,
                509,
                521,
                523,
                541,
                547,
                557,
                563,
                569,
                571,
                577,
                587,
                593,
                599,
                601,
                607,
                613,
                617,
                619,
                631,
                641,
                643,
                647,
                653,
                659,
                661,
                673,
                677,
                683,
                691,
                701,
                709,
                719,
                727,
                733,
                739,
                743,
                751,
                757,
                761,
                769,
                773,
                787,
                797,
                809,
                811,
                821,
                823,
                827,
                829,
                839,
                853,
                857,
                859,
                863,
                877,
                881,
                883,
                887,
                907,
                911,
                919,
                929,
                937,
                941,
                947,
                953,
                967,
                971,
                977,
                983,
                991,
                997,
            ]),
            (ni = 67108864 / e[e.length - 1]),
            (t.prototype.chunkSize = nu),
            (t.prototype.toRadix = iu),
            (t.prototype.fromRadix = ru),
            (t.prototype.fromNumber = uu),
            (t.prototype.bitwiseTo = hu),
            (t.prototype.changeBit = rf),
            (t.prototype.addTo = of),
            (t.prototype.dMultiply = pf),
            (t.prototype.dAddOffset = wf),
            (t.prototype.multiplyLowerTo = gf),
            (t.prototype.multiplyUpperTo = ne),
            (t.prototype.modInt = se),
            (t.prototype.millerRabin = le),
            (t.prototype.clone = br),
            (t.prototype.intValue = kr),
            (t.prototype.byteValue = dr),
            (t.prototype.shortValue = gr),
            (t.prototype.signum = tu),
            (t.prototype.toByteArray = fu),
            (t.prototype.equals = eu),
            (t.prototype.min = ou),
            (t.prototype.max = su),
            (t.prototype.and = lu),
            (t.prototype.or = au),
            (t.prototype.xor = vu),
            (t.prototype.andNot = yu),
            (t.prototype.not = pu),
            (t.prototype.shiftLeft = wu),
            (t.prototype.shiftRight = bu),
            (t.prototype.getLowestSetBit = du),
            (t.prototype.bitCount = nf),
            (t.prototype.testBit = tf),
            (t.prototype.setBit = uf),
            (t.prototype.clearBit = ff),
            (t.prototype.flipBit = ef),
            (t.prototype.add = sf),
            (t.prototype.subtract = hf),
            (t.prototype.multiply = cf),
            (t.prototype.divide = af),
            (t.prototype.remainder = vf),
            (t.prototype.divideAndRemainder = yf),
            (t.prototype.modPow = ee),
            (t.prototype.modInverse = he),
            (t.prototype.pow = df),
            (t.prototype.gcd = oe),
            (t.prototype.isProbablePrime = ce),
            (t.prototype.square = lf),
            (ht.prototype.init = ae),
            (ht.prototype.next = ve),
            (ct = 256),
            a == null)
        ) {
            if (((a = []), (s = 0), window.crypto && window.crypto.getRandomValues)) for (ot = new Uint32Array(256), window.crypto.getRandomValues(ot), et = 0; et < ot.length; ++et) a[s++] = ot[et] & 255;
            tt = function (n) {
                if (((this.count = this.count || 0), this.count >= 256 || s >= ct)) {
                    window.removeEventListener ? window.removeEventListener("mousemove", tt) : window.detachEvent && window.detachEvent("onmousemove", tt);
                    return;
                }
                this.count += 1;
                var t = n.x + n.y;
                a[s++] = t & 255;
            };
            window.addEventListener ? window.addEventListener("mousemove", tt) : window.attachEvent && window.attachEvent("onmousemove", tt);
        }
        st.prototype.nextBytes = we;
        u.prototype.doPublic = de;
        u.prototype.setPublic = ke;
        u.prototype.encrypt = ge;
        u.prototype.doPrivate = uo;
        u.prototype.setPrivate = to;
        u.prototype.setPrivateEx = io;
        u.prototype.generate = ro;
        (u.prototype.decrypt = fo),
            (function () {
                var f = function (n, r, u) {
                        var o = new st(),
                            s = n >> 1;
                        this.e = parseInt(r, 16);
                        var e = new t(r, 16),
                            f = this,
                            h = function () {
                                var l = function () {
                                        var n;
                                        f.p.compareTo(f.q) <= 0 && ((n = f.p), (f.p = f.q), (f.q = n));
                                        var i = f.p.subtract(t.ONE),
                                            r = f.q.subtract(t.ONE),
                                            o = i.multiply(r);
                                        o.gcd(e).compareTo(t.ONE) == 0
                                            ? ((f.n = f.p.multiply(f.q)),
                                              (f.d = e.modInverse(o)),
                                              (f.dmp1 = f.d.mod(i)),
                                              (f.dmq1 = f.d.mod(r)),
                                              (f.coeff = f.q.modInverse(f.p)),
                                              setTimeout(function () {
                                                  u();
                                              }, 0))
                                            : setTimeout(h, 0);
                                    },
                                    r = function () {
                                        f.q = i();
                                        f.q.fromNumberAsync(s, 1, o, function () {
                                            f.q.subtract(t.ONE).gcda(e, function (n) {
                                                n.compareTo(t.ONE) == 0 && f.q.isProbablePrime(10) ? setTimeout(l, 0) : setTimeout(r, 0);
                                            });
                                        });
                                    },
                                    c = function () {
                                        f.p = i();
                                        f.p.fromNumberAsync(n - s, 1, o, function () {
                                            f.p.subtract(t.ONE).gcda(e, function (n) {
                                                n.compareTo(t.ONE) == 0 && f.p.isProbablePrime(10) ? setTimeout(r, 0) : setTimeout(c, 0);
                                            });
                                        });
                                    };
                                setTimeout(c, 0);
                            };
                        setTimeout(h, 0);
                    },
                    n,
                    r;
                u.prototype.generateAsync = f;
                n = function (n, t) {
                    var r = this.s < 0 ? this.negate() : this.clone(),
                        i = n.s < 0 ? n.negate() : n.clone(),
                        o,
                        f,
                        u,
                        e;
                    if ((r.compareTo(i) < 0 && ((o = r), (r = i), (i = o)), (f = r.getLowestSetBit()), (u = i.getLowestSetBit()), u < 0)) {
                        t(r);
                        return;
                    }
                    f < u && (u = f);
                    u > 0 && (r.rShiftTo(u, r), i.rShiftTo(u, i));
                    e = function () {
                        (f = r.getLowestSetBit()) > 0 && r.rShiftTo(f, r);
                        (f = i.getLowestSetBit()) > 0 && i.rShiftTo(f, i);
                        r.compareTo(i) >= 0 ? (r.subTo(i, r), r.rShiftTo(1, r)) : (i.subTo(r, i), i.rShiftTo(1, i));
                        r.signum() > 0
                            ? setTimeout(e, 0)
                            : (u > 0 && i.lShiftTo(u, i),
                              setTimeout(function () {
                                  t(i);
                              }, 0));
                    };
                    setTimeout(e, 10);
                };
                t.prototype.gcda = n;
                r = function (n, i, r, u) {
                    var f, o, e, s;
                    "number" == typeof i
                        ? n < 2
                            ? this.fromInt(1)
                            : (this.fromNumber(n, r),
                              this.testBit(n - 1) || this.bitwiseTo(t.ONE.shiftLeft(n - 1), ut, this),
                              this.isEven() && this.dAddOffset(1, 0),
                              (f = this),
                              (o = function () {
                                  f.dAddOffset(2, 0);
                                  f.bitLength() > n && f.subTo(t.ONE.shiftLeft(n - 1), f);
                                  f.isProbablePrime(i)
                                      ? setTimeout(function () {
                                            u();
                                        }, 0)
                                      : setTimeout(o, 0);
                              }),
                              setTimeout(o, 0))
                        : ((e = []), (s = n & 7), (e.length = (n >> 3) + 1), i.nextBytes(e), s > 0 ? (e[0] &= (1 << s) - 1) : (e[0] = 0), this.fromString(e, 256));
                };
                t.prototype.fromNumberAsync = r;
            })();
        w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        lt = "=";
        r = r || {};
        r.env = r.env || {};
        var vt = r,
            yt = Object.prototype,
            eo = "[object Function]",
            ii = ["toString", "valueOf"];
        r.env.parseUA = function (n) {
            var u = function (n) {
                    var t = 0;
                    return parseFloat(
                        n.replace(/\./g, function () {
                            return t++ == 1 ? "" : ".";
                        })
                    );
                },
                f = navigator,
                i = { ie: 0, opera: 0, gecko: 0, webkit: 0, chrome: 0, mobile: null, air: 0, ipad: 0, iphone: 0, ipod: 0, ios: null, android: 0, webos: 0, caja: f && f.cajaVersion, secure: !1, os: null },
                r = n || (navigator && navigator.userAgent),
                e = window && window.location,
                o = e && e.href,
                t;
            return (
                (i.secure = o && o.toLowerCase().indexOf("https") === 0),
                r &&
                    (/windows|win32/i.test(r) ? (i.os = "windows") : /macintosh/i.test(r) ? (i.os = "macintosh") : /rhino/i.test(r) && (i.os = "rhino"),
                    /KHTML/.test(r) && (i.webkit = 1),
                    (t = r.match(/AppleWebKit\/([^\s]*)/)),
                    t &&
                        t[1] &&
                        ((i.webkit = u(t[1])),
                        / Mobile\//.test(r)
                            ? ((i.mobile = "Apple"),
                              (t = r.match(/OS ([^\s]*)/)),
                              t && t[1] && (t = u(t[1].replace("_", "."))),
                              (i.ios = t),
                              (i.ipad = i.ipod = i.iphone = 0),
                              (t = r.match(/iPad|iPod|iPhone/)),
                              t && t[0] && (i[t[0].toLowerCase()] = i.ios))
                            : ((t = r.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)),
                              t && (i.mobile = t[0]),
                              /webOS/.test(r) && ((i.mobile = "WebOS"), (t = r.match(/webOS\/([^\s]*);/)), t && t[1] && (i.webos = u(t[1]))),
                              / Android/.test(r) && ((i.mobile = "Android"), (t = r.match(/Android ([^\s]*);/)), t && t[1] && (i.android = u(t[1])))),
                        (t = r.match(/Chrome\/([^\s]*)/)),
                        t && t[1] ? (i.chrome = u(t[1])) : ((t = r.match(/AdobeAIR\/([^\s]*)/)), t && (i.air = t[0]))),
                    i.webkit ||
                        ((t = r.match(/Opera[\s\/]([^\s]*)/)),
                        t && t[1]
                            ? ((i.opera = u(t[1])), (t = r.match(/Version\/([^\s]*)/)), t && t[1] && (i.opera = u(t[1])), (t = r.match(/Opera Mini[^;]*/)), t && (i.mobile = t[0]))
                            : ((t = r.match(/MSIE\s([^;]*)/)), t && t[1] ? (i.ie = u(t[1])) : ((t = r.match(/Gecko\/([^\s]*)/)), t && ((i.gecko = 1), (t = r.match(/rv:([^\s\)]*)/)), t && t[1] && (i.gecko = u(t[1]))))))),
                i
            );
        };
        r.env.ua = r.env.parseUA();
        r.isFunction = function (n) {
            return typeof n == "function" || yt.toString.apply(n) === eo;
        };
        r._IEEnumFix = r.env.ua.ie
            ? function (n, t) {
                  for (var r, u, i = 0; i < ii.length; i = i + 1) (r = ii[i]), (u = t[r]), vt.isFunction(u) && u != yt[r] && (n[r] = u);
              }
            : function () {};
        r.extend = function (n, t, i) {
            if (!t || !n) throw new Error("extend failed, please check that all dependencies are included.");
            var u = function () {},
                r;
            if (((u.prototype = t.prototype), (n.prototype = new u()), (n.prototype.constructor = n), (n.superclass = t.prototype), t.prototype.constructor == yt.constructor && (t.prototype.constructor = t), i)) {
                for (r in i) vt.hasOwnProperty(i, r) && (n.prototype[r] = i[r]);
                vt._IEEnumFix(n.prototype, i);
            }
        };
        (typeof KJUR != "undefined" && KJUR) || (KJUR = {});
        (typeof KJUR.asn1 != "undefined" && KJUR.asn1) || (KJUR.asn1 = {});
        KJUR.asn1.ASN1Util = new (function () {
            this.integerToByteHex = function (n) {
                var t = n.toString(16);
                return t.length % 2 == 1 && (t = "0" + t), t;
            };
            this.bigIntToMinTwosComplementsHex = function (n) {
                var i = n.toString(16),
                    e,
                    r,
                    u,
                    f,
                    o,
                    s;
                if (i.substr(0, 1) != "-") i.length % 2 == 1 ? (i = "0" + i) : i.match(/^[0-7]/) || (i = "00" + i);
                else {
                    for (e = i.substr(1), r = e.length, r % 2 == 1 ? (r += 1) : i.match(/^[0-7]/) || (r += 2), u = "", f = 0; f < r; f++) u += "f";
                    o = new t(u, 16);
                    s = o.xor(n).add(t.ONE);
                    i = s.toString(16).replace(/^-/, "");
                }
                return i;
            };
            this.getPEMStringFromHex = function (n, t) {
                var r = CryptoJS.enc.Hex.parse(n),
                    u = CryptoJS.enc.Base64.stringify(r),
                    i = u.replace(/(.{64})/g, "$1\r\n");
                return (i = i.replace(/\r\n$/, "")), "-----BEGIN " + t + "-----\r\n" + i + "\r\n-----END " + t + "-----\r\n";
            };
        })();
        KJUR.asn1.ASN1Object = function () {
            var n = "";
            this.getLengthHexFromValue = function () {
                var i, t, r, u;
                if (typeof this.hV == "undefined" || this.hV == null) throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + n.length + ",v=" + this.hV;
                if (((i = this.hV.length / 2), (t = i.toString(16)), t.length % 2 == 1 && (t = "0" + t), i < 128)) return t;
                if (((r = t.length / 2), r > 15)) throw "ASN.1 length too long to represent by 8x: n = " + i.toString(16);
                return (u = 128 + r), u.toString(16) + t;
            };
            this.getEncodedHex = function () {
                return (this.hTLV == null || this.isModified) && ((this.hV = this.getFreshValueHex()), (this.hL = this.getLengthHexFromValue()), (this.hTLV = this.hT + this.hL + this.hV), (this.isModified = !1)), this.hTLV;
            };
            this.getValueHex = function () {
                return this.getEncodedHex(), this.hV;
            };
            this.getFreshValueHex = function () {
                return "";
            };
        };
        KJUR.asn1.DERAbstractString = function (n) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function () {
                return this.s;
            };
            this.setString = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.s = n;
                this.hV = stohex(this.s);
            };
            this.setStringHex = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.s = null;
                this.hV = n;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            typeof n != "undefined" && (typeof n.str != "undefined" ? this.setString(n.str) : typeof n.hex != "undefined" && this.setStringHex(n.hex));
        };
        r.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERAbstractTime = function () {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function (n) {
                utc = n.getTime() + n.getTimezoneOffset() * 6e4;
                return new Date(utc);
            };
            this.formatDate = function (n, t) {
                var r = this.zeroPadding,
                    i = this.localDateToUTC(n),
                    u = String(i.getFullYear());
                t == "utc" && (u = u.substr(2, 2));
                var f = r(String(i.getMonth() + 1), 2),
                    e = r(String(i.getDate()), 2),
                    o = r(String(i.getHours()), 2),
                    s = r(String(i.getMinutes()), 2),
                    h = r(String(i.getSeconds()), 2);
                return u + f + e + o + s + h + "Z";
            };
            this.zeroPadding = function (n, t) {
                return n.length >= t ? n : new Array(t - n.length + 1).join("0") + n;
            };
            this.getString = function () {
                return this.s;
            };
            this.setString = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.s = n;
                this.hV = stohex(this.s);
            };
            this.setByDateValue = function (n, t, i, r, u, f) {
                var e = new Date(Date.UTC(n, t - 1, i, r, u, f, 0));
                this.setByDate(e);
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
        };
        r.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERAbstractStructured = function (n) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.asn1Array = n;
            };
            this.appendASN1Object = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.asn1Array.push(n);
            };
            this.asn1Array = [];
            typeof n != "undefined" && typeof n.array != "undefined" && (this.asn1Array = n.array);
        };
        r.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERBoolean = function () {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this);
            this.hT = "01";
            this.hTLV = "0101ff";
        };
        r.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERInteger = function (n) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this);
            this.hT = "02";
            this.setByBigInteger = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(n);
            };
            this.setByInteger = function (n) {
                var i = new t(String(n), 10);
                this.setByBigInteger(i);
            };
            this.setValueHex = function (n) {
                this.hV = n;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            typeof n != "undefined" && (typeof n.bigint != "undefined" ? this.setByBigInteger(n.bigint) : typeof n.int != "undefined" ? this.setByInteger(n.int) : typeof n.hex != "undefined" && this.setValueHex(n.hex));
        };
        r.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERBitString = function (n) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this);
            this.hT = "03";
            this.setHexValueIncludingUnusedBits = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.hV = n;
            };
            this.setUnusedBitsAndHexValue = function (n, t) {
                if (n < 0 || 7 < n) throw "unused bits shall be from 0 to 7: u = " + n;
                var i = "0" + n;
                this.hTLV = null;
                this.isModified = !0;
                this.hV = i + t;
            };
            this.setByBinaryString = function (n) {
                var i, u, t, f, r;
                for (n = n.replace(/0+$/, ""), i = 8 - (n.length % 8), i == 8 && (i = 0), t = 0; t <= i; t++) n += "0";
                for (u = "", t = 0; t < n.length - 1; t += 8) (f = n.substr(t, 8)), (r = parseInt(f, 2).toString(16)), r.length == 1 && (r = "0" + r), (u += r);
                this.hTLV = null;
                this.isModified = !0;
                this.hV = "0" + i + u;
            };
            this.setByBooleanArray = function (n) {
                for (var i = "", t = 0; t < n.length; t++) i += n[t] == !0 ? "1" : "0";
                this.setByBinaryString(i);
            };
            this.newFalseArray = function (n) {
                for (var i = new Array(n), t = 0; t < n; t++) i[t] = !1;
                return i;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            typeof n != "undefined" &&
                (typeof n.hex != "undefined" ? this.setHexValueIncludingUnusedBits(n.hex) : typeof n.bin != "undefined" ? this.setByBinaryString(n.bin) : typeof n.array != "undefined" && this.setByBooleanArray(n.array));
        };
        r.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);
        KJUR.asn1.DEROctetString = function (n) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, n);
            this.hT = "04";
        };
        r.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERNull = function () {
            KJUR.asn1.DERNull.superclass.constructor.call(this);
            this.hT = "05";
            this.hTLV = "0500";
        };
        r.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERObjectIdentifier = function (n) {
            var i = function (n) {
                    var t = n.toString(16);
                    return t.length == 1 && (t = "0" + t), t;
                },
                r = function (n) {
                    var s = "",
                        h = new t(n, 10),
                        u = h.toString(2),
                        e = 7 - (u.length % 7),
                        o,
                        r,
                        f;
                    for (e == 7 && (e = 0), o = "", r = 0; r < e; r++) o += "0";
                    for (u = o + u, r = 0; r < u.length - 1; r += 7) (f = u.substr(r, 7)), r != u.length - 7 && (f = "1" + f), (s += i(parseInt(f, 2)));
                    return s;
                };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
            this.hT = "06";
            this.setValueHex = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.s = null;
                this.hV = n;
            };
            this.setValueOidString = function (n) {
                var u;
                if (!n.match(/^[0-9.]+$/)) throw "malformed oid string: " + n;
                var f = "",
                    t = n.split("."),
                    e = parseInt(t[0]) * 40 + parseInt(t[1]);
                for (f += i(e), t.splice(0, 2), u = 0; u < t.length; u++) f += r(t[u]);
                this.hTLV = null;
                this.isModified = !0;
                this.s = null;
                this.hV = f;
            };
            this.setValueName = function (n) {
                if (typeof KJUR.asn1.x509.OID.name2oidList[n] != "undefined") {
                    var t = KJUR.asn1.x509.OID.name2oidList[n];
                    this.setValueOidString(t);
                } else throw "DERObjectIdentifier oidName undefined: " + n;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            typeof n != "undefined" && (typeof n.oid != "undefined" ? this.setValueOidString(n.oid) : typeof n.hex != "undefined" ? this.setValueHex(n.hex) : typeof n.name != "undefined" && this.setValueName(n.name));
        };
        r.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERUTF8String = function (n) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, n);
            this.hT = "0c";
        };
        r.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERNumericString = function (n) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, n);
            this.hT = "12";
        };
        r.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERPrintableString = function (n) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, n);
            this.hT = "13";
        };
        r.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERTeletexString = function (n) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, n);
            this.hT = "14";
        };
        r.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERIA5String = function (n) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, n);
            this.hT = "16";
        };
        r.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERUTCTime = function (n) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, n);
            this.hT = "17";
            this.setByDate = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.date = n;
                this.s = this.formatDate(this.date, "utc");
                this.hV = stohex(this.s);
            };
            typeof n != "undefined" && (typeof n.str != "undefined" ? this.setString(n.str) : typeof n.hex != "undefined" ? this.setStringHex(n.hex) : typeof n.date != "undefined" && this.setByDate(n.date));
        };
        r.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);
        KJUR.asn1.DERGeneralizedTime = function (n) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, n);
            this.hT = "18";
            this.setByDate = function (n) {
                this.hTLV = null;
                this.isModified = !0;
                this.date = n;
                this.s = this.formatDate(this.date, "gen");
                this.hV = stohex(this.s);
            };
            typeof n != "undefined" && (typeof n.str != "undefined" ? this.setString(n.str) : typeof n.hex != "undefined" ? this.setStringHex(n.hex) : typeof n.date != "undefined" && this.setByDate(n.date));
        };
        r.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);
        KJUR.asn1.DERSequence = function (n) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, n);
            this.hT = "30";
            this.getFreshValueHex = function () {
                for (var i, t = "", n = 0; n < this.asn1Array.length; n++) (i = this.asn1Array[n]), (t += i.getEncodedHex());
                return (this.hV = t), this.hV;
            };
        };
        r.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);
        KJUR.asn1.DERSet = function (n) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, n);
            this.hT = "31";
            this.getFreshValueHex = function () {
                for (var i, n = [], t = 0; t < this.asn1Array.length; t++) (i = this.asn1Array[t]), n.push(i.getEncodedHex());
                return n.sort(), (this.hV = n.join("")), this.hV;
            };
        };
        r.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);
        KJUR.asn1.DERTaggedObject = function (n) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
            this.hT = "a0";
            this.hV = "";
            this.isExplicit = !0;
            this.asn1Object = null;
            this.setASN1Object = function (n, t, i) {
                this.hT = t;
                this.isExplicit = n;
                this.asn1Object = i;
                this.isExplicit
                    ? ((this.hV = this.asn1Object.getEncodedHex()), (this.hTLV = null), (this.isModified = !0))
                    : ((this.hV = null), (this.hTLV = i.getEncodedHex()), (this.hTLV = this.hTLV.replace(/^../, t)), (this.isModified = !1));
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            typeof n != "undefined" &&
                (typeof n.tag != "undefined" && (this.hT = n.tag),
                typeof n.explicit != "undefined" && (this.isExplicit = n.explicit),
                typeof n.obj != "undefined" && ((this.asn1Object = n.obj), this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
        };
        r.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
            (function (t) {
                "use strict";
                var r = {},
                    i;
                r.decode = function (n) {
                    var r, f, o, u;
                    if (i === t) {
                        for (f = "0123456789ABCDEF", o = " \f\n\r\t \u2028\u2029", i = [], r = 0; r < 16; ++r) i[f.charAt(r)] = r;
                        for (f = f.toLowerCase(), r = 10; r < 16; ++r) i[f.charAt(r)] = r;
                        for (r = 0; r < o.length; ++r) i[o.charAt(r)] = -1;
                    }
                    var s = [],
                        e = 0,
                        h = 0;
                    for (r = 0; r < n.length; ++r) {
                        if (((u = n.charAt(r)), u == "=")) break;
                        if (((u = i[u]), u != -1)) {
                            if (u === t) throw "Illegal character at offset " + r;
                            e |= u;
                            ++h >= 2 ? ((s[s.length] = e), (e = 0), (h = 0)) : (e <<= 4);
                        }
                    }
                    if (h) throw "Hex encoding incomplete: 4 bits missing";
                    return s;
                };
                n.Hex = r;
            })(),
            (function (t) {
                "use strict";
                var i = {},
                    r;
                i.decode = function (n) {
                    var i, h, o, e;
                    if (r === t) {
                        for (h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = "= \f\n\r\t \u2028\u2029", r = [], i = 0; i < 64; ++i) r[h.charAt(i)] = i;
                        for (i = 0; i < o.length; ++i) r[o.charAt(i)] = -1;
                    }
                    var u = [],
                        f = 0,
                        s = 0;
                    for (i = 0; i < n.length; ++i) {
                        if (((e = n.charAt(i)), e == "=")) break;
                        if (((e = r[e]), e != -1)) {
                            if (e === t) throw "Illegal character at offset " + i;
                            f |= e;
                            ++s >= 4 ? ((u[u.length] = f >> 16), (u[u.length] = (f >> 8) & 255), (u[u.length] = f & 255), (f = 0), (s = 0)) : (f <<= 6);
                        }
                    }
                    switch (s) {
                        case 1:
                            throw "Base64 encoding incomplete: at least 2 bits missing";
                        case 2:
                            u[u.length] = f >> 10;
                            break;
                        case 3:
                            u[u.length] = f >> 16;
                            u[u.length] = (f >> 8) & 255;
                    }
                    return u;
                };
                i.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;
                i.unarmor = function (n) {
                    var t = i.re.exec(n);
                    if (t)
                        if (t[1]) n = t[1];
                        else if (t[2]) n = t[2];
                        else throw "RegExp out of sync";
                    return i.decode(n);
                };
                n.Base64 = i;
            })(),
            (function (n) {
                "use strict";
                function i(n, t) {
                    n instanceof i ? ((this.enc = n.enc), (this.pos = n.pos)) : ((this.enc = n), (this.pos = t));
                }
                function t(n, t, i, r, u) {
                    this.stream = n;
                    this.header = t;
                    this.length = i;
                    this.tag = r;
                    this.sub = u;
                }
                var u = 100,
                    f = "…",
                    r = {
                        tag: function (n, t) {
                            var i = document.createElement(n);
                            return (i.className = t), i;
                        },
                        text: function (n) {
                            return document.createTextNode(n);
                        },
                    };
                i.prototype.get = function (t) {
                    if ((t === n && (t = this.pos++), t >= this.enc.length)) throw "Requesting byte offset " + t + " on a stream of length " + this.enc.length;
                    return this.enc[t];
                };
                i.prototype.hexDigits = "0123456789ABCDEF";
                i.prototype.hexByte = function (n) {
                    return this.hexDigits.charAt((n >> 4) & 15) + this.hexDigits.charAt(n & 15);
                };
                i.prototype.hexDump = function (n, t, i) {
                    for (var r = "", u = n; u < t; ++u)
                        if (((r += this.hexByte(this.get(u))), i !== !0))
                            switch (u & 15) {
                                case 7:
                                    r += "  ";
                                    break;
                                case 15:
                                    r += "\n";
                                    break;
                                default:
                                    r += " ";
                            }
                    return r;
                };
                i.prototype.parseStringISO = function (n, t) {
                    for (var r = "", i = n; i < t; ++i) r += String.fromCharCode(this.get(i));
                    return r;
                };
                i.prototype.parseStringUTF = function (n, t) {
                    for (var i, u = "", r = n; r < t; )
                        (i = this.get(r++)),
                            (u +=
                                i < 128
                                    ? String.fromCharCode(i)
                                    : i > 191 && i < 224
                                    ? String.fromCharCode(((i & 31) << 6) | (this.get(r++) & 63))
                                    : String.fromCharCode(((i & 15) << 12) | ((this.get(r++) & 63) << 6) | (this.get(r++) & 63)));
                    return u;
                };
                i.prototype.parseStringBMP = function (n, t) {
                    for (var u, f, r = "", i = n; i < t; i += 2) (u = this.get(i)), (f = this.get(i + 1)), (r += String.fromCharCode((u << 8) + f));
                    return r;
                };
                i.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
                i.prototype.parseTime = function (n, t) {
                    var r = this.parseStringISO(n, t),
                        i = this.reTime.exec(r);
                    return i
                        ? ((r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4]),
                          i[5] && ((r += ":" + i[5]), i[6] && ((r += ":" + i[6]), i[7] && (r += "." + i[7]))),
                          i[8] && ((r += " UTC"), i[8] != "Z" && ((r += i[8]), i[9] && (r += ":" + i[9]))),
                          r)
                        : "Unrecognized time: " + r;
                };
                i.prototype.parseInteger = function (n, t) {
                    var i = t - n,
                        r,
                        u,
                        f;
                    if (i > 4) {
                        if (((i <<= 3), (r = this.get(n)), r === 0)) i -= 8;
                        else while (r < 128) (r <<= 1), --i;
                        return "(" + i + " bit)";
                    }
                    for (u = 0, f = n; f < t; ++f) u = (u << 8) | this.get(f);
                    return u;
                };
                i.prototype.parseBitString = function (n, t) {
                    var e = this.get(n),
                        o = ((t - n - 1) << 3) - e,
                        u = "(" + o + " bit)",
                        f,
                        i,
                        s,
                        r;
                    if (o <= 20)
                        for (f = e, u += " ", i = t - 1; i > n; --i) {
                            for (s = this.get(i), r = f; r < 8; ++r) u += (s >> r) & 1 ? "1" : "0";
                            f = 0;
                        }
                    return u;
                };
                i.prototype.parseOctetString = function (n, t) {
                    var r = t - n,
                        e = "(" + r + " byte) ",
                        i;
                    for (r > u && (t = n + u), i = n; i < t; ++i) e += this.hexByte(this.get(i));
                    return r > u && (e += f), e;
                };
                i.prototype.parseOID = function (n, t) {
                    for (var e, o, r = "", i = 0, u = 0, f = n; f < t; ++f)
                        (e = this.get(f)), (i = (i << 7) | (e & 127)), (u += 7), e & 128 || (r === "" ? ((o = i < 80 ? (i < 40 ? 0 : 1) : 2), (r = o + "." + (i - o * 40))) : (r += "." + (u >= 31 ? "bigint" : i)), (i = u = 0));
                    return r;
                };
                t.prototype.typeName = function () {
                    if (this.tag === n) return "unknown";
                    var i = this.tag >> 6,
                        r = (this.tag >> 5) & 1,
                        t = this.tag & 31;
                    switch (i) {
                        case 0:
                            switch (t) {
                                case 0:
                                    return "EOC";
                                case 1:
                                    return "BOOLEAN";
                                case 2:
                                    return "INTEGER";
                                case 3:
                                    return "BIT_STRING";
                                case 4:
                                    return "OCTET_STRING";
                                case 5:
                                    return "NULL";
                                case 6:
                                    return "OBJECT_IDENTIFIER";
                                case 7:
                                    return "ObjectDescriptor";
                                case 8:
                                    return "EXTERNAL";
                                case 9:
                                    return "REAL";
                                case 10:
                                    return "ENUMERATED";
                                case 11:
                                    return "EMBEDDED_PDV";
                                case 12:
                                    return "UTF8String";
                                case 16:
                                    return "SEQUENCE";
                                case 17:
                                    return "SET";
                                case 18:
                                    return "NumericString";
                                case 19:
                                    return "PrintableString";
                                case 20:
                                    return "TeletexString";
                                case 21:
                                    return "VideotexString";
                                case 22:
                                    return "IA5String";
                                case 23:
                                    return "UTCTime";
                                case 24:
                                    return "GeneralizedTime";
                                case 25:
                                    return "GraphicString";
                                case 26:
                                    return "VisibleString";
                                case 27:
                                    return "GeneralString";
                                case 28:
                                    return "UniversalString";
                                case 30:
                                    return "BMPString";
                                default:
                                    return "Universal_" + t.toString(16);
                            }
                        case 1:
                            return "Application_" + t.toString(16);
                        case 2:
                            return "[" + t + "]";
                        case 3:
                            return "Private_" + t.toString(16);
                    }
                };
                t.prototype.reSeemsASCII = /^[ -~]+$/;
                t.prototype.content = function () {
                    var r;
                    if (this.tag === n) return null;
                    var e = this.tag >> 6,
                        o = this.tag & 31,
                        t = this.posContent(),
                        i = Math.abs(this.length);
                    if (e !== 0)
                        return this.sub !== null
                            ? "(" + this.sub.length + " elem)"
                            : ((r = this.stream.parseStringISO(t, t + Math.min(i, u))), this.reSeemsASCII.test(r) ? r.substring(0, 2 * u) + (r.length > 2 * u ? f : "") : this.stream.parseOctetString(t, t + i));
                    switch (o) {
                        case 1:
                            return this.stream.get(t) === 0 ? "false" : "true";
                        case 2:
                            return this.stream.parseInteger(t, t + i);
                        case 3:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(t, t + i);
                        case 4:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + i);
                        case 6:
                            return this.stream.parseOID(t, t + i);
                        case 16:
                        case 17:
                            return "(" + this.sub.length + " elem)";
                        case 12:
                            return this.stream.parseStringUTF(t, t + i);
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 26:
                            return this.stream.parseStringISO(t, t + i);
                        case 30:
                            return this.stream.parseStringBMP(t, t + i);
                        case 23:
                        case 24:
                            return this.stream.parseTime(t, t + i);
                    }
                    return null;
                };
                t.prototype.toString = function () {
                    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub === null ? "null" : this.sub.length) + "]";
                };
                t.prototype.print = function (t) {
                    if ((t === n && (t = ""), document.writeln(t + this), this.sub !== null)) {
                        t += "  ";
                        for (var i = 0, r = this.sub.length; i < r; ++i) this.sub[i].print(t);
                    }
                };
                t.prototype.toPrettyString = function (t) {
                    var i, r, u;
                    if (
                        (t === n && (t = ""),
                        (i = t + this.typeName() + " @" + this.stream.pos),
                        this.length >= 0 && (i += "+"),
                        (i += this.length),
                        this.tag & 32 ? (i += " (constructed)") : (this.tag == 3 || this.tag == 4) && this.sub !== null && (i += " (encapsulates)"),
                        (i += "\n"),
                        this.sub !== null)
                    )
                        for (t += "  ", r = 0, u = this.sub.length; r < u; ++r) i += this.sub[r].toPrettyString(t);
                    return i;
                };
                t.prototype.toDOM = function () {
                    var t = r.tag("div", "node"),
                        f,
                        n,
                        i,
                        o,
                        s,
                        u,
                        h,
                        e,
                        c;
                    if (
                        ((t.asn1 = this),
                        (f = r.tag("div", "head")),
                        (n = this.typeName().replace(/_/g, " ")),
                        (f.innerHTML = n),
                        (i = this.content()),
                        i !== null && ((i = String(i).replace(/</g, "&lt;")), (o = r.tag("span", "preview")), o.appendChild(r.text(i)), f.appendChild(o)),
                        t.appendChild(f),
                        (this.node = t),
                        (this.head = f),
                        (s = r.tag("div", "value")),
                        (n = "Offset: " + this.stream.pos + "<br/>"),
                        (n += "Length: " + this.header + "+"),
                        (n += this.length >= 0 ? this.length : -this.length + " (undefined)"),
                        this.tag & 32 ? (n += "<br/>(constructed)") : (this.tag == 3 || this.tag == 4) && this.sub !== null && (n += "<br/>(encapsulates)"),
                        i !== null &&
                            ((n += "<br/>Value:<br/><b>" + i + "</b>"), typeof oids == "object" && this.tag == 6 && ((u = oids[i]), u && (u.d && (n += "<br/>" + u.d), u.c && (n += "<br/>" + u.c), u.w && (n += "<br/>(warning!)")))),
                        (s.innerHTML = n),
                        t.appendChild(s),
                        (h = r.tag("div", "sub")),
                        this.sub !== null)
                    )
                        for (e = 0, c = this.sub.length; e < c; ++e) h.appendChild(this.sub[e].toDOM());
                    return (
                        t.appendChild(h),
                        (f.onclick = function () {
                            t.className = t.className == "node collapsed" ? "node" : "node collapsed";
                        }),
                        t
                    );
                };
                t.prototype.posStart = function () {
                    return this.stream.pos;
                };
                t.prototype.posContent = function () {
                    return this.stream.pos + this.header;
                };
                t.prototype.posEnd = function () {
                    return this.stream.pos + this.header + Math.abs(this.length);
                };
                t.prototype.fakeHover = function (n) {
                    this.node.className += " hover";
                    n && (this.head.className += " hover");
                };
                t.prototype.fakeOut = function (n) {
                    var t = / ?hover/;
                    this.node.className = this.node.className.replace(t, "");
                    n && (this.head.className = this.head.className.replace(t, ""));
                };
                t.prototype.toHexDOM_sub = function (n, t, i, u, f) {
                    if (!(u >= f)) {
                        var e = r.tag("span", t);
                        e.appendChild(r.text(i.hexDump(u, f)));
                        n.appendChild(e);
                    }
                };
                t.prototype.toHexDOM = function (t) {
                    var i = r.tag("span", "hex"),
                        f,
                        e,
                        u,
                        o;
                    if (
                        (t === n && (t = i),
                        (this.head.hexNode = i),
                        (this.head.onmouseover = function () {
                            this.hexNode.className = "hexCurrent";
                        }),
                        (this.head.onmouseout = function () {
                            this.hexNode.className = "hex";
                        }),
                        (i.asn1 = this),
                        (i.onmouseover = function () {
                            var n = !t.selected;
                            n && ((t.selected = this.asn1), (this.className = "hexCurrent"));
                            this.asn1.fakeHover(n);
                        }),
                        (i.onmouseout = function () {
                            var n = t.selected == this.asn1;
                            this.asn1.fakeOut(n);
                            n && ((t.selected = null), (this.className = "hex"));
                        }),
                        this.toHexDOM_sub(i, "tag", this.stream, this.posStart(), this.posStart() + 1),
                        this.toHexDOM_sub(i, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()),
                        this.sub === null)
                    )
                        i.appendChild(r.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                    else if (this.sub.length > 0) {
                        for (f = this.sub[0], e = this.sub[this.sub.length - 1], this.toHexDOM_sub(i, "intro", this.stream, this.posContent(), f.posStart()), u = 0, o = this.sub.length; u < o; ++u) i.appendChild(this.sub[u].toHexDOM(t));
                        this.toHexDOM_sub(i, "outro", this.stream, e.posEnd(), this.posEnd());
                    }
                    return i;
                };
                t.prototype.toHexString = function () {
                    return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
                };
                t.decodeLength = function (n) {
                    var t = n.get(),
                        i = t & 127,
                        r;
                    if (i == t) return i;
                    if (i > 3) throw "Length over 24 bits not supported at position " + (n.pos - 1);
                    if (i === 0) return -1;
                    for (t = 0, r = 0; r < i; ++r) t = (t << 8) | n.get();
                    return t;
                };
                t.hasContent = function (n, r, u) {
                    var f, e, o;
                    if (n & 32) return !0;
                    if (n < 3 || n > 4 || ((f = new i(u)), n == 3 && f.get(), (e = f.get()), (e >> 6) & 1)) return !1;
                    try {
                        return (o = t.decodeLength(f)), f.pos - u.pos + o == r;
                    } catch (s) {
                        return !1;
                    }
                };
                t.decode = function (n) {
                    var f, o, s;
                    n instanceof i || (n = new i(n, 0));
                    var h = new i(n),
                        e = n.get(),
                        r = t.decodeLength(n),
                        c = n.pos - h.pos,
                        u = null;
                    if (t.hasContent(e, r, n))
                        if (((f = n.pos), e == 3 && n.get(), (u = []), r >= 0)) {
                            for (o = f + r; n.pos < o; ) u[u.length] = t.decode(n);
                            if (n.pos != o) throw "Content size is not correct for container starting at offset " + f;
                        } else
                            try {
                                for (;;) {
                                    if (((s = t.decode(n)), s.tag === 0)) break;
                                    u[u.length] = s;
                                }
                                r = f - n.pos;
                            } catch (l) {
                                throw "Exception while decoding undefined length content: " + l;
                            }
                    else n.pos += r;
                    return new t(h, c, r, e, u);
                };
                t.test = function () {
                    for (
                        var r = [
                                { value: [39], expected: 39 },
                                { value: [129, 201], expected: 201 },
                                { value: [131, 254, 220, 186], expected: 16702650 },
                            ],
                            n = 0,
                            f = r.length;
                        n < f;
                        ++n
                    ) {
                        var e = new i(r[n].value, 0),
                            u = t.decodeLength(e);
                        u != r[n].expected && document.write("In test[" + n + "] expected " + r[n].expected + " got " + u + "\n");
                    }
                };
                window.ASN1 = t;
            })();
        ASN1.prototype.getHexStringValue = function () {
            var n = this.toHexString(),
                t = this.header * 2,
                i = this.length * 2;
            return n.substr(t, i);
        };
        u.prototype.parseKey = function (t) {
            var u, e, o, s, h, c, l, r;
            try {
                var v = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? Hex.decode(t) : n.Base64.unarmor(t),
                    i = ASN1.decode(v);
                if (i.sub.length === 9)
                    (u = i.sub[1].getHexStringValue()),
                        (this.n = f(u, 16)),
                        (r = i.sub[2].getHexStringValue()),
                        (this.e = parseInt(r, 16)),
                        (e = i.sub[3].getHexStringValue()),
                        (this.d = f(e, 16)),
                        (o = i.sub[4].getHexStringValue()),
                        (this.p = f(o, 16)),
                        (s = i.sub[5].getHexStringValue()),
                        (this.q = f(s, 16)),
                        (h = i.sub[6].getHexStringValue()),
                        (this.dmp1 = f(h, 16)),
                        (c = i.sub[7].getHexStringValue()),
                        (this.dmq1 = f(c, 16)),
                        (l = i.sub[8].getHexStringValue()),
                        (this.coeff = f(l, 16));
                else if (i.sub.length === 2) {
                    var y = i.sub[1],
                        a = y.sub[0],
                        u = a.sub[0].getHexStringValue();
                    this.n = f(u, 16);
                    r = a.sub[1].getHexStringValue();
                    this.e = parseInt(r, 16);
                } else return !1;
                return !0;
            } catch (p) {
                return !1;
            }
        };
        u.prototype.getPrivateBaseKey = function () {
            var n = {
                    array: [
                        new KJUR.asn1.DERInteger({ int: 0 }),
                        new KJUR.asn1.DERInteger({ bigint: this.n }),
                        new KJUR.asn1.DERInteger({ int: this.e }),
                        new KJUR.asn1.DERInteger({ bigint: this.d }),
                        new KJUR.asn1.DERInteger({ bigint: this.p }),
                        new KJUR.asn1.DERInteger({ bigint: this.q }),
                        new KJUR.asn1.DERInteger({ bigint: this.dmp1 }),
                        new KJUR.asn1.DERInteger({ bigint: this.dmq1 }),
                        new KJUR.asn1.DERInteger({ bigint: this.coeff }),
                    ],
                },
                t = new KJUR.asn1.DERSequence(n);
            return t.getEncodedHex();
        };
        u.prototype.getPrivateBaseKeyB64 = function () {
            return at(this.getPrivateBaseKey());
        };
        u.prototype.getPublicBaseKey = function () {
            var n = { array: [new KJUR.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }), new KJUR.asn1.DERNull()] },
                u = new KJUR.asn1.DERSequence(n),
                t,
                i,
                r;
            return (
                (n = { array: [new KJUR.asn1.DERInteger({ bigint: this.n }), new KJUR.asn1.DERInteger({ int: this.e })] }),
                (t = new KJUR.asn1.DERSequence(n)),
                (n = { hex: "00" + t.getEncodedHex() }),
                (i = new KJUR.asn1.DERBitString(n)),
                (n = { array: [u, i] }),
                (r = new KJUR.asn1.DERSequence(n)),
                r.getEncodedHex()
            );
        };
        u.prototype.getPublicBaseKeyB64 = function () {
            return at(this.getPublicBaseKey());
        };
        u.prototype.wordwrap = function (n, t) {
            if (((t = t || 64), !n)) return n;
            var i = "(.{1," + t + "})( +|$\n?)|(.{1," + t + "})";
            return n.match(RegExp(i, "g")).join("\n");
        };
        u.prototype.getPrivateKey = function () {
            var n = "-----BEGIN RSA PRIVATE KEY-----\n";
            return (n += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n"), n + "-----END RSA PRIVATE KEY-----";
        };
        u.prototype.getPublicKey = function () {
            var n = "-----BEGIN PUBLIC KEY-----\n";
            return (n += this.wordwrap(this.getPublicBaseKeyB64()) + "\n"), n + "-----END PUBLIC KEY-----";
        };
        u.prototype.hasPublicKeyProperty = function (n) {
            return (n = n || {}), n.hasOwnProperty("n") && n.hasOwnProperty("e");
        };
        u.prototype.hasPrivateKeyProperty = function (n) {
            return (
                (n = n || {}), n.hasOwnProperty("n") && n.hasOwnProperty("e") && n.hasOwnProperty("d") && n.hasOwnProperty("p") && n.hasOwnProperty("q") && n.hasOwnProperty("dmp1") && n.hasOwnProperty("dmq1") && n.hasOwnProperty("coeff")
            );
        };
        u.prototype.parsePropertiesFrom = function (n) {
            this.n = n.n;
            this.e = n.e;
            n.hasOwnProperty("d") && ((this.d = n.d), (this.p = n.p), (this.q = n.q), (this.dmp1 = n.dmp1), (this.dmq1 = n.dmq1), (this.coeff = n.coeff));
        };
        d = function (n) {
            u.call(this);
            n && (typeof n == "string" ? this.parseKey(n) : (this.hasPrivateKeyProperty(n) || this.hasPublicKeyProperty(n)) && this.parsePropertiesFrom(n));
        };
        d.prototype = new u();
        d.prototype.constructor = d;
        n.JSEncrypt = function (n) {
            n = n || {};
            this.default_key_size = parseInt(n.default_key_size) || 1024;
            this.default_public_exponent = n.default_public_exponent || "010001";
            this.log = n.log || !1;
            this.key = null;
        };
        n.JSEncrypt.setKey = function (n) {
            this.log && this.key && console.warn("A key was already set, overriding existing.");
            this.key = new d(n);
        };
        n.JSEncrypt.setPrivateKey = function (n) {
            this.setKey(n);
        };
        n.JSEncrypt.setPublicKey = function (n) {
            this.setKey(n);
        };
        n.JSEncrypt.decrypt = function (n) {
            try {
                return this.getKey().decrypt(ti(n));
            } catch (t) {
                return !1;
            }
        };
        n.JSEncrypt.encrypt = function (n) {
            try {
                return at(this.getKey().encrypt(n));
            } catch (t) {
                return !1;
            }
        };
        n.JSEncrypt.getKey = function (n) {
            if (!this.key) {
                if (((this.key = new d()), n && {}.toString.call(n) === "[object Function]")) {
                    this.key.generateAsync(this.default_key_size, this.default_public_exponent, n);
                    return;
                }
                this.key.generate(this.default_key_size, this.default_public_exponent);
            }
            return this.key;
        };
        n.JSEncrypt.getPrivateKey = function () {
            return this.getKey().getPrivateKey();
        };
        n.JSEncrypt.getPrivateKeyB64 = function () {
            return this.getKey().getPrivateBaseKeyB64();
        };
        n.JSEncrypt.getPublicKey = function () {
            return this.getKey().getPublicKey();
        };
        n.JSEncrypt.getPublicKeyB64 = function () {
            return this.getKey().getPublicBaseKeyB64();
        };
    })(cp || (cp = {})),
    (function (n) {
        var i = (function () {
                function n() {}
                return (
                    (n.currentModel = function () {
                        return this.getModel();
                    }),
                    (n.getModel = function () {
                        var u, i, r, n;
                        if (
                            (this.iosVer == null &&
                                (this.iosVer = parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1),
                            this.iosVer >= 12.2)
                        )
                            return t.IPhone_NotDetected;
                        if (
                            ((u = window.devicePixelRatio),
                            this.canvasEl === undefined && (this.canvasEl = document.createElement("canvas")),
                            this.canvasEl &&
                                ((i = this.canvasEl.getContext("webgl") || this.canvasEl.getContext("experimental-webgl")), i && ((r = i.getExtension("WEBGL_debug_renderer_info")), r && (n = i.getParameter(r.UNMASKED_RENDERER_WEBGL)))),
                            window.screen.height === 896 && window.screen.width === 414 && (window.devicePixelRatio === 3 || window.devicePixelRatio === 2))
                        )
                            switch (u) {
                                default:
                                    return t.IPhone_XR;
                                case 2:
                                    return t.IPhone_XR;
                                case 3:
                                    return t.IPhone_XS_Max;
                            }
                        else if (window.screen.height === 812 && window.screen.width === 375)
                            switch (n) {
                                default:
                                    return t.IPhone_X;
                                case "Apple A11 GPU":
                                    return t.IPhone_X;
                                case "Apple A12 GPU":
                                    return t.IPhone_XS;
                            }
                        else if (window.screen.height === 736 && window.screen.width === 414 && window.devicePixelRatio === 3)
                            switch (n) {
                                default:
                                    return t.IPhone_6_PLUS;
                                case "Apple A8 GPU":
                                    return t.IPhone_6_PLUS;
                                case "Apple A9 GPU":
                                    return t.IPhone_6S_PLUS;
                                case "Apple A10 GPU":
                                    return t.IPhone_7_PLUS;
                                case "Apple A11 GPU":
                                    return t.IPhone_8_PLUS;
                            }
                        else if (window.screen.height === 667 && window.screen.width === 375 && window.devicePixelRatio === 3)
                            switch (n) {
                                default:
                                    return t.IPhone_6_PLUS;
                                case "Apple A8 GPU":
                                    return t.IPhone_6_PLUS;
                                case "Apple A9 GPU":
                                    return t.IPhone_6S_PLUS;
                                case "Apple A10 GPU":
                                    return t.IPhone_7_PLUS;
                                case "Apple A11 GPU":
                                    return t.IPhone_8_PLUS;
                            }
                        else if (window.screen.height === 667 && window.screen.width === 375 && window.devicePixelRatio === 2)
                            switch (n) {
                                default:
                                    return t.IPhone_6;
                                case "Apple A8 GPU":
                                    return t.IPhone_6;
                                case "Apple A9 GPU":
                                    return t.IPhone_6S;
                                case "Apple A10 GPU":
                                    return t.IPhone_7;
                                case "Apple A11 GPU":
                                    return t.IPhone_8;
                            }
                        else if (window.screen.height / window.screen.width == 1.775 && window.devicePixelRatio == 2)
                            switch (n) {
                                default:
                                    return t.IPhone_5;
                                case "PowerVR SGX 543":
                                    return t.IPhone_5;
                                case "Apple A7 GPU":
                                    return t.IPhone_5S;
                                case "Apple A8 GPU":
                                    return t.IPhone_6;
                                case "Apple A9 GPU":
                                    return t.IPhone_SE;
                                case "Apple A10 GPU":
                                    return t.IPhone_7;
                                case "Apple A11 GPU":
                                    return t.IPhone_8;
                            }
                        else if (window.screen.height / window.screen.width == 1.5 && window.devicePixelRatio == 2)
                            switch (n) {
                                default:
                                    return t.IPhone_4;
                                case "PowerVR SGX 535":
                                    return t.IPhone_4;
                                case "PowerVR SGX 543":
                                    return t.IPhone_4S;
                            }
                        else if (window.screen.height / window.screen.width == 1.5 && window.devicePixelRatio == 1)
                            switch (n) {
                                default:
                                    return t.IPhone;
                                case "ALP0298C05":
                                    return t.IPhone_3GS;
                                case "S5L8900":
                                    return t.IPhone;
                            }
                        else return n && !!n.match("Apple") && this.iosVer ? t.IPhone : t.Not_IPhone;
                    }),
                    (n.iosVer = null),
                    n
                );
            })(),
            t;
        (n.PhoneModelDetector = i),
            (function (n) {
                n[(n.Not_IPhone = 0)] = "Not_IPhone";
                n[(n.IPhone = 1)] = "IPhone";
                n[(n.IPhone_3G = 3)] = "IPhone_3G";
                n[(n.IPhone_3GS = 3.1)] = "IPhone_3GS";
                n[(n.IPhone_4 = 4)] = "IPhone_4";
                n[(n.IPhone_4S = 4.1)] = "IPhone_4S";
                n[(n.IPhone_5 = 5)] = "IPhone_5";
                n[(n.IPhone_5C = 5.1)] = "IPhone_5C";
                n[(n.IPhone_5S = 5.2)] = "IPhone_5S";
                n[(n.IPhone_SE = 6)] = "IPhone_SE";
                n[(n.IPhone_6 = 6.1)] = "IPhone_6";
                n[(n.IPhone_6_PLUS = 6.2)] = "IPhone_6_PLUS";
                n[(n.IPhone_6S = 6.3)] = "IPhone_6S";
                n[(n.IPhone_6S_PLUS = 6.4)] = "IPhone_6S_PLUS";
                n[(n.IPhone_7 = 7)] = "IPhone_7";
                n[(n.IPhone_7_PLUS = 7.1)] = "IPhone_7_PLUS";
                n[(n.IPhone_8 = 8)] = "IPhone_8";
                n[(n.IPhone_8_PLUS = 8.1)] = "IPhone_8_PLUS";
                n[(n.IPhone_X = 10)] = "IPhone_X";
                n[(n.IPhone_XR = 10.1)] = "IPhone_XR";
                n[(n.IPhone_XS = 10.2)] = "IPhone_XS";
                n[(n.IPhone_XS_Max = 10.3)] = "IPhone_XS_Max";
                n[(n.IPhone_NotDetected = 1e6)] = "IPhone_NotDetected";
            })((t = n.PhoneModelEnum || (n.PhoneModelEnum = {})));
    })(cp || (cp = {})),
    (function (n) {
        var t, i;
        (function (n) {
            n[(n.none = 0)] = "none";
            n[(n.iFrame = 1)] = "iFrame";
        })((t = n.PostMessageSupport || (n.PostMessageSupport = {})));
        i = (function () {
            function i() {
                var i, t, r;
                this.device = {};
                i = n.PhoneModelDetector.currentModel();
                t = navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
                t && ((this.device[t[0]] = {}), (this.device.iOS = {}));
                i && ((this.device.iPhone = {}), (this.device.iOS = {}));
                r = navigator.userAgent.match(/Android/g);
                r && (this.device.Android = {});
                this.browser = {
                    ie: this.detectIE(),
                    chromeForIOS: this.detectChromeForIOS(),
                    safariForIOS: this.detectSafariForIOS(),
                    androidBrowser: this.detectAndroidBrowser(),
                    yandexBrowser: this.detectYandexBrowser(),
                    facebookForIOS: this.detectFacebookForIOS(),
                    microsoftEdge: this.detectEdge(),
                    instagram: this.detectInstagram(),
                };
                this.features = {
                    hasSmallScreen: this.detectSmallScreen() || this.device.iPad,
                    supportsCors: "withCredentials" in new XMLHttpRequest(),
                    postMessageSupport: this.detectPostMessageSupport(),
                    supportsViewPortUnits: this.detectViewPortUnitsSupport(),
                    hasVirtualKeyboard: !!(this.detectSmallScreen() || this.device.iPad),
                    supportsApplePay: this.detectApplePaySupport(),
                    supportsGooglePay: this.detectGooglePaySupport(),
                    isDonateWithApplePayEnabled: this.detectDonateWithApplePayButtonEnabled(),
                };
            }
            return (
                (i.prototype.detectViewPortUnitsSupport = function () {
                    var n, t;
                    try {
                        if (((n = this.browser.androidBrowser), n)) return n.version ? ((t = n.version.split(".")), t.length > 1 && parseInt(t[0]) == 4 && parseInt(t[1]) > 4) : !1;
                    } catch (i) {}
                    return !(this.browser.ie && this.browser.ie.version < 9);
                }),
                (i.prototype.detectPostMessageSupport = function () {
                    return "postMessage" in window ? (this.browser.ie && this.browser.ie.version < 9 ? t.none : t.iFrame) : t.none;
                }),
                (i.prototype.detectSmallScreen = function () {
                    var n, t;
                    return this.device.iPhone
                        ? !0
                        : window.screen
                        ? ((n = window.screen.width), window.devicePixelRatio && window.screen.width / window.devicePixelRatio === window.innerWidth && (n = window.innerWidth), (t = window.screen && n <= 760 && n > 0), t)
                            ? !0
                            : !1
                        : !1;
                }),
                (i.prototype.detectApplePaySupport = function () {
                    try {
                        return !(n.PhoneModelDetector.currentModel() === n.PhoneModelEnum.IPhone_5S) && this.browser.chromeForIOS == null && "ApplePaySession" in window && ApplePaySession.canMakePayments();
                    } catch (t) {
                        return !1;
                    }
                }),
                (i.prototype.detectGooglePaySupport = function () {
                    return !0;
                }),
                (i.prototype.detectFacebookForIOS = function () {
                    var n = !!(this.device.iPhone || this.device.iPad || this.device.iPod),
                        t = navigator.userAgent.toUpperCase().indexOf("FBAN/") > -1;
                    return n && t ? {} : null;
                }),
                (i.prototype.detectChromeForIOS = function () {
                    return /(CriOS)/g.test(navigator.userAgent) ? {} : null;
                }),
                (i.prototype.detectYandexBrowser = function () {
                    return navigator.userAgent.indexOf("YaBrowser") > -1 ? {} : null;
                }),
                (i.prototype.detectSafariForIOS = function () {
                    var n = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
                    return n && !this.detectChromeForIOS() && !this.detectYandexBrowser() && !this.detectFacebookForIOS() ? { version: (navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/) || [""])[0].replace(/_/g, ".") } : null;
                }),
                (i.prototype.detectIE = function () {
                    var n = navigator.userAgent.match(/MSIE\s+([0-9\.]+);/i);
                    return n && n.length > 1 ? { version: parseInt(n[1], 10) } : !!window.MSInputMethodContext && !!document.documentMode ? { version: 11 } : null;
                }),
                (i.prototype.detectEdge = function () {
                    var n = navigator.userAgent.match(/Edge\/([^ ]+)$/i);
                    return n ? { version: parseFloat(n[1]) } : !!window.MSInputMethodContext && !!document.documentMode ? { version: 11 } : null;
                }),
                (i.prototype.detectInstagram = function () {
                    var n = navigator.userAgent.match(/instagram/gi);
                    return n ? !0 : null;
                }),
                (i.prototype.detectAndroidBrowser = function () {
                    var i = navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Mozilla/5.0") > -1 && navigator.userAgent.indexOf("AppleWebKit") > -1,
                        n = /AppleWebKit\/([\d.]+)/.exec(navigator.userAgent),
                        t = n === null ? null : parseFloat(n[1]),
                        r = i && t !== null && t < 537;
                    return r ? { version: this.getAndroidVersion(navigator.userAgent) } : null;
                }),
                (i.prototype.getAndroidVersion = function (n) {
                    var t = n.match(/android\s([0-9\.]+)/i) || n.match(/android[; ]+release\/([0-9\.]+)/i);
                    return t ? t[1] : null;
                }),
                (i.prototype.detectDonateWithApplePayButtonEnabled = function () {
                    var n, t, i;
                    return !this.browser.safariForIOS || !this.browser.safariForIOS.version
                        ? !1
                        : ((n = this.browser.safariForIOS.version.split(".")), (t = parseInt(n[0])), !t)
                        ? !1
                        : (n.length > 1 && (i = parseInt(n[1])), i || (i = 0), t < 10 ? !1 : t > 10 ? !0 : i >= 2);
                }),
                i
            );
        })();
        n.ClientSettings = i;
        n.clientSettings = new i();
    })(cp || (cp = {})),
    (function (n) {
        var t, i, r, u, f, e;
        (function (n) {
            n.amEx = "card-american-express";
            n.master = "card-mastercard";
            n.mir = "card-mir";
            n.maestro = "card-maestro";
            n.visa = "card-visa";
            n.unknown = "card-unknown";
        })((t = n.CardType || (n.CardType = {}))),
            (function (n) {
                n.amEx = "0000 000000 00000";
                n["default"] = "0000 0000 0000 0000 000";
            })((i = n.CardNumberMask || (n.CardNumberMask = {}))),
            (function (n) {
                n.amEx = "0000";
                n["default"] = "000";
            })((r = n.CardCvvMask || (n.CardCvvMask = {})));
        u = (function () {
            function u() {}
            return (
                (u.addEventListener = function (n, t, i) {
                    if (n.addEventListener) n.addEventListener(t, i, !1);
                    else {
                        var r = function (n) {
                            return (
                                n || (n = window.event),
                                typeof n.keyCode != "undefined" && (n.which = n.keyCode),
                                typeof n.srcElement != "undefined" && (n.target = n.srcElement),
                                n.preventDefault ||
                                    (n.preventDefault = function () {
                                        this.returnValue = !1;
                                    }),
                                i(n)
                            );
                        };
                        i._normalizingHandler = r;
                        n.attachEvent("on" + t, r);
                    }
                }),
                (u.generateRandomString = function (n) {
                    for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < n; r++) t += i.charAt(Math.floor(Math.random() * i.length));
                    return t;
                }),
                (u.removeEventListener = function (n, t, i) {
                    if (n.removeEventListener) n.removeEventListener(t, i, !1);
                    else {
                        var r = i._normalizingHandler;
                        n.detachEvent("on" + t, r || i);
                    }
                }),
                (u.show = function (n) {
                    n.style.display = "";
                    n.style.opacity = "0";
                    setTimeout(function () {
                        n.style.opacity = "1";
                    }, 15);
                }),
                (u.createAndSubmitForm = function (n, t, i) {
                    var r = n.createElement("form"),
                        f,
                        u;
                    r.action = t;
                    r.method = "POST";
                    for (f in i) i.hasOwnProperty(f) && ((u = n.createElement("input")), (u.type = "hidden"), (u.name = f), (u.value = i[f]), r.appendChild(u));
                    n.body.appendChild(r);
                    r.submit();
                }),
                (u.hide = function (n) {
                    n.style.opacity = "0";
                    n.style.display = "none";
                }),
                (u.sendPost = function (n, t, i, r, f) {
                    return u.sendRequest(n, "POST", t, i, r, f);
                }),
                (u.sendGet = function (n, t, i, r, f) {
                    return u.sendRequest(n, "GET", t, i, r, f);
                }),
                (u.sendPostAndReturnJson = function (n, t, i, r, f) {
                    return u.sendPost(
                        n,
                        t,
                        function (n) {
                            i && i(JSON.parse(n));
                        },
                        r,
                        f
                    );
                }),
                (u.sendGetAndReturnJson = function (n, t, i, r, f) {
                    return u.sendGet(
                        n,
                        t,
                        function (n) {
                            i && i(JSON.parse(n));
                        },
                        r,
                        f
                    );
                }),
                (u.removeSpaces = function (n) {
                    return n.replace(/ /g, "");
                }),
                (u.isHtmlElement = function (n) {
                    return ("HTMLElement" in window && n instanceof HTMLElement) || (n && typeof n == "object" && n !== null && n.nodeType === 1 && typeof n.nodeName == "string");
                }),
                (u.createElement = function (n, t) {
                    for (var i, f = [], r = 2; r < arguments.length; r++) f[r - 2] = arguments[r];
                    return (
                        (i = document.createElement(n)),
                        t != null && (i.className = t),
                        f != null &&
                            u.forEach(f, function (n) {
                                n instanceof HTMLElement || n instanceof HTMLInputElement ? i.appendChild(n) : i.setAttribute(n.key, n.value);
                            }),
                        i
                    );
                }),
                (u.createKVP = function (n, t) {
                    return { key: n, value: t };
                }),
                (u.createQuery = function (n) {
                    var t = [];
                    for (var i in n) t.push(encodeURIComponent(i) + "=" + encodeURIComponent(n[i]));
                    return t.length === 0 ? "" : t.join("&");
                }),
                (u.parseQuery = function (n) {
                    var u = {},
                        f,
                        i,
                        t,
                        r;
                    if (n && n.length > 0)
                        for (f = n.charAt(0) === "?" ? n.substring(1) : n, i = f.split("&"), t = 0; t < i.length; t++) {
                            r = i[t].split("=");
                            try {
                                u[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
                            } catch (e) {}
                        }
                    return u;
                }),
                (u.sendRequest = function (n, t, i, r, f, e) {
                    var o, s;
                    if (i && typeof i != "object") throw new Error("Argument 'data' must me a parameter name-value map");
                    if (((o = u.createXMLHttpRequest()), !o)) throw Error("XMLHttpRequest is not supported");
                    if (o.readyState == 4) throw Error("XMLHttpRequest is in invalid state 'completed' before sending");
                    if (((s = null), t === "POST")) o.open(t, n, !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), (s = u.createQuery(i));
                    else if (t === "GET") o.open(t, u.appendQueryToUrl(n, i), !0);
                    else throw new Error("Invalid HTTP method '" + t + "'");
                    return (
                        o.setRequestHeader("X-Request-ID", u.XRequestId),
                        (o.onreadystatechange = function () {
                            var n = this;
                            n.readyState == 4 && ((o.onreadystatechange = null), n.status != 200 && n.status != 304 ? f && f(n.responseText) : r && r(n.responseText), e && e(n.responseText));
                        }),
                        o.send(s),
                        o
                    );
                }),
                (u.appendQueryToUrl = function (n, t) {
                    var r, i;
                    if (typeof t != "object") throw new TypeError("Argument 'data' must be an object");
                    return ((r = u.createQuery(t)), !r) ? n : ((i = document.createElement("a")), (i.href = n), (i.search += (i.search ? "&" : "?") + r), i.href);
                }),
                (u.createXMLHttpRequest = function () {
                    try {
                        return new XMLHttpRequest();
                    } catch (n) {}
                    try {
                        return new ActiveXObject("Msxml3.XMLHTTP");
                    } catch (n) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                    } catch (n) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                    } catch (n) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP");
                    } catch (n) {}
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (n) {}
                    return null;
                }),
                (u.addClass = function (n, t) {
                    n.className += " " + t;
                }),
                (u.isClosedWindow = function (n) {
                    return !n || !("closed" in n) || n.closed;
                }),
                (u.trackWindowClose = function (n, t) {
                    return u.setIntervalUntil(
                        t,
                        function () {
                            return u.isClosedWindow(n);
                        },
                        500
                    );
                }),
                (u.removeClass = function (n, t) {
                    for (var i = n.className; i.indexOf(t) != -1; ) (i = i.replace(t, "")), (i = i.trim());
                    n.className = i;
                }),
                (u.format = function (n) {
                    for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
                    if (!n) throw new Error("Argument 'formatString' must be specified");
                    return n.replace(/{(\d+)}/g, function (n, t) {
                        var r = parseInt(t),
                            u;
                        if (isNaN(r)) throw new Error("Invalid format string argument '" + t + "'");
                        if (((u = i[r]), typeof u == "undefined")) throw new Error("Format string argument " + r + " must be provided");
                        return u;
                    });
                }),
                (u.forEach = function (n, t) {
                    for (var i = 0; i < n.length; i++) t(n[i], i);
                }),
                (u.indexOf = function (n, t, i) {
                    if (typeof n == "undefined" || n === null) throw new TypeError('"this" is null or not defined');
                    var r = n.length >>> 0;
                    for (i = +i || 0, Math.abs(i) === Infinity && (i = 0), i < 0 && ((i += r), i < 0 && (i = 0)); i < r; i++) if (n[i] === t) return i;
                    return -1;
                }),
                (u.isNullOrUndefined = function (n) {
                    return n === null || typeof n == "undefined";
                }),
                (u.setIntervalUntil = function (n, t, i) {
                    var r = setInterval(
                        function () {
                            t() && (clearInterval(r), n());
                        },
                        i,
                        t
                    );
                    return {
                        cancel: function () {
                            r && (clearInterval(r), (r = null));
                        },
                    };
                }),
                (u.getHostnameFromUrl = function (n) {
                    var t = n.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                    return t && t[1];
                }),
                (u.createLoadingOverlay = function (t) {
                    var i = t.createElement("div"),
                        r,
                        u,
                        f;
                    i.id = "cloudpayments-loading-overlay-63456123";
                    i.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; text-align: center; background-color: transparent; z-index: 9999;";
                    r = t.createElement("img");
                    r.style.cssText = "position: relative; top:50%;width: 64px;height:64px";
                    r.src = n.serverSettings.widget.rootUrl + n.serverSettings.widget.loadingImagePath;
                    u = t.createElement("style");
                    u.type = "text/css";
                    f =
                        "@-webkit-keyframes rotating /* Safari and Chrome */ {\n                        from {\n                          -webkit-transform: rotate(0deg);\n                          -o-transform: rotate(0deg);\n                          transform: rotate(0deg);\n                        }\n                        to {\n                          -webkit-transform: rotate(360deg);\n                          -o-transform: rotate(360deg);\n                          transform: rotate(360deg);\n                        }\n                      }\n                      @keyframes rotating {\n                        from {\n                          -ms-transform: rotate(0deg);\n                          -moz-transform: rotate(0deg);\n                          -webkit-transform: rotate(0deg);\n                          -o-transform: rotate(0deg);\n                          transform: rotate(0deg);\n                        }\n                        to {\n                          -ms-transform: rotate(360deg);\n                          -moz-transform: rotate(360deg);\n                          -webkit-transform: rotate(360deg);\n                          -o-transform: rotate(360deg);\n                          transform: rotate(360deg);\n                        }\n                      }\n                      #cloudpayments-loading-overlay-63456123 > img{\n                        -webkit-animation: rotating 2s linear infinite;\n                        -moz-animation: rotating 2s linear infinite;\n                        -ms-animation: rotating 2s linear infinite;\n                        -o-animation: rotating 2s linear infinite;\n                        animation: rotating 2s linear infinite;\n                      }";
                    u.appendChild(t.createTextNode(f));
                    i.appendChild(u);
                    i.appendChild(r);
                    t.body.appendChild(i);
                }),
                (u.removeLoadingOverlay = function (n) {
                    var t = n.getElementById("cloudpayments-loading-overlay-63456123");
                    t && t.parentNode && t.parentNode.removeChild(t);
                }),
                (u.getCardType = function (n) {
                    var i = n,
                        r,
                        f,
                        e;
                    if (!i || i.length === 0) return t.unknown;
                    if (i.length >= 2 && (i.slice(0, 2) === "34" || i.slice(0, 2) === "37")) return t.amEx;
                    if (((r = u.removeSpaces(i)), r.length >= 6 && ((f = parseInt(r.substring(0, 6))), !isNaN(f) && f >= 222100 && f <= 272099))) return t.master;
                    if (r.length >= 4) {
                        e = r.substring(0, 4);
                        switch (e) {
                            case "2200":
                            case "2201":
                            case "2202":
                            case "2203":
                            case "2204":
                                return t.mir;
                        }
                    }
                    switch (i[0]) {
                        case "4":
                            return t.visa;
                        case "5":
                            return t.master;
                        case "6":
                            return t.maestro;
                    }
                    return t.unknown;
                }),
                (u.getDataAsync = function (n) {
                    return new Promise(function (t, i) {
                        var r = new XMLHttpRequest();
                        r.open("GET", n);
                        r.onload = function () {
                            r.status === 200 ? t(JSON.parse(r.response)) : i(JSON.parse(r.response));
                        };
                        r.send();
                    });
                }),
                (u.postDataAsync = function (n, t, i, r) {
                    function f(n) {
                        var i = [];
                        for (var t in n) n.hasOwnProperty(t) && i.push(encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
                        return i.join("&");
                    }
                    return new Promise(function (e, o) {
                        var h = r ? f(t) : JSON.stringify(t),
                            s = new XMLHttpRequest();
                        s.open("POST", n);
                        s.setRequestHeader("Content-Type", r ? "application/x-www-form-urlencoded" : "application/json");
                        s.setRequestHeader("X-Request-ID", u.XRequestId);
                        s.onload = function () {
                            if (i && typeof i == "function") {
                                var n = i(s);
                                n.valid ? e(n.body) : o(n.body);
                            } else s.status === 200 ? e(JSON.parse(s.response)) : o(JSON.parse(s.response));
                        };
                        s.send(h);
                    });
                }),
                (u.showMessage = function (n, t) {
                    var i = document.createElement("div"),
                        r;
                    i.className = t ? "alert alert-success" : "alert alert-danger";
                    i.innerText = n;
                    r = new Date().getTime().toString();
                    i.id = r;
                    document.body.append(i);
                    i.clientWidth;
                    i.classList.add("shown");
                    setTimeout(function () {
                        i.classList.remove("shown");
                        setTimeout(function () {
                            i.remove();
                        }, 3500);
                    }, 3e3);
                }),
                (u.localStorage = function (n, t) {
                    if (t === undefined) {
                        var i = null;
                        try {
                            return (i = window.localStorage.getItem(n));
                        } catch (r) {
                            return i;
                        }
                    } else
                        try {
                            window.localStorage.setItem(n, t);
                        } catch (u) {}
                }),
                (u.XRequestId = u.generateRandomString(32)),
                (u.cardTypeSettings = [
                    { CardType: t.amEx, CardNumberMask: i.amEx, CardCvvMask: r.amEx, CanChangeFocusLength: 15 },
                    { CardType: t.unknown, CardNumberMask: i.default, CardCvvMask: r.default, CanChangeFocusLength: 16 },
                ]),
                (u.jsLoader = {
                    url: function (n) {
                        return new Promise(function (t, i) {
                            var r = document.createElement("script");
                            r.type = "text/javascript";
                            r.src = n;
                            r.addEventListener(
                                "load",
                                function () {
                                    return t(!0);
                                },
                                !1
                            );
                            r.addEventListener(
                                "error",
                                function () {
                                    return i(!1);
                                },
                                !1
                            );
                            document.body.appendChild(r);
                        });
                    },
                    urls: function (n) {
                        return Promise.all(n.map(u.jsLoader.url));
                    },
                }),
                u
            );
        })();
        n.Utils = u;
        f = (function () {
            function n(n) {
                n === void 0 && (n = window.location.search);
                this.map = u.parseQuery(n);
                this.queryLowerCase = {};
                for (var t in this.map) this.queryLowerCase[t.toLowerCase()] = this.map[t];
            }
            return (
                (n.prototype.getValue = function (n) {
                    return this.queryLowerCase[n.toLowerCase()];
                }),
                n
            );
        })();
        n.QueryParams = f;
        n.queryParams = new f();
        "Prototype" in window &&
            ((e = JSON.stringify),
            (JSON.stringify = function (n) {
                var i = Array.prototype.toJSON,
                    t;
                return delete Array.prototype.toJSON, (t = e(n)), (Array.prototype.toJSON = i), t;
            }));
    })(cp || (cp = {})),
    (function (n) {
        var t = (function () {
            function t() {}
            return (
                (t.parseMonthYear = function (n) {
                    var t = n.replace(/[^\d]/g, "");
                    switch (t.length) {
                        case 2:
                        case 3:
                        case 5:
                            return { month: parseInt(t.substring(0, 1), 10), year: parseInt(t.substring(1), 10) };
                        case 4:
                        case 6:
                            return { month: parseInt(t.substring(0, 2), 10), year: parseInt(t.substring(2), 10) };
                        default:
                            return null;
                    }
                }),
                (t.isValidLuhn = function (n) {
                    for (
                        var i = n.length,
                            r = 0,
                            u = [
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
                            ],
                            t = 0;
                        i--;

                    )
                        (t += u[r][parseInt(n.charAt(i), 10)]), (r ^= 1);
                    return t % 10 == 0 && t > 0;
                }),
                (t.emailRegex = /^(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яА-Я\-0-9]+\.)+[a-zA-Zа-яА-Я\-0-9]{2,}))$/),
                (t.nameRegex = /^[-–., A-Z0-9]+$/i),
                (t.cvvRegex = /\d{3}/),
                (t.cvvAmexRegex = /^\d{4}$/),
                (t.phoneRegex = /(.*\d.*){11}/g),
                (t.validators = {
                    name: function (i) {
                        if (n.payViewModel && n.payViewModel.widgetSkinCode() === 2) return null;
                        if (!i) return n.localization.entry("ValidationHelper_Validator_Name_Empty");
                        if (!t.nameRegex.test(i)) return n.localization.entry("ValidationHelper_Validator_Name_Invalid");
                        var r = n.Utils.removeSpaces(i);
                        return r.length > 26 ? n.localization.entry("ValidationHelper_Validator_Name_TooLong") : r.length < 2 ? n.localization.entry("ValidationHelper_Validator_Name_TooShort") : null;
                    },
                    cardNumber: function (i) {
                        return i ? (t.isValidLuhn(n.Utils.removeSpaces(i)) ? null : n.localization.entry("ValidationHelper_Validator_CardNumber_Invalid")) : n.localization.entry("ValidationHelper_Validator_CardNumber_Empty");
                    },
                    email: function (i, r) {
                        return r() && !i ? n.localization.entry("ValidationHelper_Validator_Email_Empty") : i && n.Utils.removeSpaces(i) && !t.emailRegex.test(i) ? n.localization.entry("ValidationHelper_Validator_Email_Invalid") : null;
                    },
                    expDateMonth: function (t) {
                        if (!t) return n.localization.entry("ValidationHelper_Validator_ExpDateMonth_Empty");
                        var i = typeof t == "number" ? t : parseInt(t, 10);
                        return isNaN(i) || i < 1 || i > 12 ? n.localization.entry("ValidationHelper_Validator_ExpDateMonth_Invalid") : null;
                    },
                    expDateYear: function (t) {
                        if (!t) return n.localization.entry("ValidationHelper_Validator_ExpDateYear_Empty");
                        var i = typeof t == "number" ? t : parseInt(t, 10);
                        return isNaN(i) ? n.localization.entry("ValidationHelper_Validator_ExpDateYear_Invalid") : null;
                    },
                    expDateMonthYear: function (i) {
                        if (!i) return n.localization.entry("ValidationHelper_Validator_ExpDateMonthYear_Empty");
                        if (typeof i != "string") throw new Error("expDateMonthYear can only validate string");
                        var r = t.parseMonthYear(i);
                        return r ? t.validators.expDateMonth(r.month) || t.validators.expDateYear(r.year) : n.localization.entry("ValidationHelper_Validator_ExpDateMonthYear_Invalid");
                    },
                    expDate: function (t) {
                        if (!t) return n.localization.entry("ValidationHelper_Validator_ExpDateMonthYear_Empty");
                        if (typeof t.getMonth != "function") throw new Error("expDate can only validate date");
                        var i = new Date(),
                            r = new Date(i.getFullYear(), i.getMonth(), 1);
                        return t.getTime() < r.getTime() ? n.localization.entry("ValidationHelper_Validator_ExpDateMonthYear_Invalid") : null;
                    },
                    cvv: function (i) {
                        return function (r) {
                            return r ? ((i() ? !t.cvvAmexRegex.test(r) : !t.cvvRegex.test(r)) ? n.localization.entry("5082") : null) : n.localization.entry("ValidationHelper_Validator_Cvv_Empty");
                        };
                    },
                    phone: function (i) {
                        return i ? (t.phoneRegex.test(i) ? null : n.localization.entry("ValidationHelper_Validator_Cvv_Invalid")) : n.localization.entry("ValidationHelper_Validator_Cvv_Empty");
                    },
                }),
                t
            );
        })();
        n.ValidationHelper = t;
    })(cp || (cp = {})),
    (function (n) {
        var t = (function () {
            function t() {}
            return (
                (t.createHexPacketFromData = function (n, i, r, u) {
                    return t.createHexPacket([1, i.Number.substr(0, 6), i.Number.substr(i.Number.length - 4), i.ExpDateYear % 100, i.ExpDateMonth, u, t.createCryptogram(n, i, r)]);
                }),
                (t.createCvvHexPacket = function (i, r, u) {
                    n.JSEncrypt.setPublicKey(r);
                    var f = n.JSEncrypt.encrypt(i);
                    if (!f) throw new Error("Invalid public key");
                    return t.createHexPacket([3, u, f]);
                }),
                (t.createCryptogram = function (i, r, u) {
                    n.JSEncrypt.setPublicKey(u);
                    var e = t.numberToEvenLengthString(r.ExpDateYear % 100) + t.numberToEvenLengthString(r.ExpDateMonth),
                        o = [r.Number, e, r.CVV, i].join("@"),
                        f = n.JSEncrypt.encrypt(o);
                    if (!f) throw new Error("Invalid public key");
                    return f;
                }),
                (t.numberToEvenLengthString = function (n) {
                    var t = n.toString();
                    return (t.length % 2 == 0 ? "" : "0") + t;
                }),
                (t.createHexPacket = function (n) {
                    for (var i, r = [], u = 0; u < n.length; u++) (i = n[u]), typeof i == "number" ? r.push(t.numberToEvenLengthString(i)) : r.push(i);
                    return r.join("");
                }),
                t
            );
        })();
        n.HexPacketHelper = t;
    })(cp || (cp = {})),
    (function (n) {
        var t = (function () {
            function t(i, r, u) {
                if ((r === void 0 && (r = document.body), u === void 0 && (u = "default"), (this.publicId = i), !i)) throw new Error("Argument 'publicId' must be specified");
                if (typeof i != "string") throw new Error("Argument 'publicId' must be a string");
                if (r && !n.Utils.isHtmlElement(r)) throw new Error("Argument 'container' must be an HTMLElement");
                this.accessorMap = t.createAccessorMap(r);
                this.mode = u;
            }
            return (
                (t.prototype.prepareMD = function (t) {
                    return n.Checkout.validateMdObject(t), btoa(encodeURIComponent(JSON.stringify(t)));
                }),
                (t.validateMdObject = function (n) {
                    if (!n.hasOwnProperty("SuccessUrl")) throw new Error("'SuccessUrl' property required");
                    if (typeof n.SuccessUrl != "string") throw new Error("'SuccessUrl' property must be a string");
                    if (!n.hasOwnProperty("FailUrl")) throw new Error("'FailUrl' property required");
                    if (typeof n.FailUrl != "string") throw new Error("'FailUrl' property must be a string");
                    if (!n.hasOwnProperty("TransactionId")) throw new Error("'TransactionId' property required");
                    if (typeof n.TransactionId != "number") throw new Error("'TransactionId' property must be a number");
                    if (!n.hasOwnProperty("ThreeDsCallbackId")) throw new Error("'ThreeDsCallbackId' property required");
                    if (typeof n.ThreeDsCallbackId != "string") throw new Error("'ThreeDsCallbackId' property must be a string");
                }),
                (t.prototype.createCryptogramPacket = function (i) {
                    var r = i || {},
                        u,
                        e,
                        f;
                    for (u in this.accessorMap) {
                        if (r[u]) throw new Error("Data for field '" + u + "' is both found in element and passed as direct value");
                        r[u] = this.accessorMap[u]();
                    }
                    if (((e = t.validate(r, this.mode)), e)) return { success: !1, packet: null, messages: e };
                    this.clearFields();
                    f = null;
                    switch (this.mode) {
                        case "default":
                            f = n.HexPacketHelper.createHexPacketFromData(this.publicId, t.getPrivateTransactionData(r), n.publicKey.pem, n.publicKey.version);
                            break;
                        case "cvv":
                            f = n.HexPacketHelper.createCvvHexPacket(n.Utils.removeSpaces(r.cvv), n.publicKey.pem, n.publicKey.version);
                    }
                    return { success: !0, packet: f, messages: null };
                }),
                (t.prototype.clearFields = function () {
                    for (var n in this.accessorMap) this.accessorMap[n]("");
                }),
                (t.validate = function (t, i) {
                    var o = !0,
                        s = {},
                        f = [],
                        r,
                        u,
                        e;
                    switch (i) {
                        case "cvv":
                            f = ["cvv"];
                            break;
                        case "default":
                            f = ["cardNumber", "cvv"];
                    }
                    if (
                        (n.Utils.forEach(f, function (n) {
                            if (typeof t[n] == "undefined") throw new Error("Field '" + n + "' must be provided");
                        }),
                        i != "cvv" && typeof t.expDateMonthYear == "undefined" && (t.expDateMonth === "undefined" || t.expDateYear === "undefined"))
                    )
                        throw new Error("Field 'expDateMonthYear' or both fields 'expDateMonth' and 'expDateYear'  must be provided");
                    for (r in t)
                        (u = null),
                            console.log(r),
                            (u =
                                r == "cvv"
                                    ? i == "cvv"
                                        ? n.ValidationHelper.validators.cvv(function () {
                                              return !1;
                                          })
                                        : n.ValidationHelper.validators.cvv(function () {
                                              return n.Utils.getCardType(t.cardNumber) == n.CardType.amEx;
                                          })
                                    : n.ValidationHelper.validators[r]),
                            u && ((e = u(t[r])), e && ((o = !1), (s[r] = e)));
                    return o ? null : s;
                }),
                (t.createAccessorMap = function (i) {
                    i === void 0 && (i = document.body);
                    var u = ["cvv", "cardNumber", "expDateMonth", "expDateYear", "expDateMonthYear"],
                        r = {},
                        f = t.getDescendants(i);
                    return (
                        n.Utils.forEach(f, function (i) {
                            var f = i.attributes.getNamedItem("data-cp"),
                                e;
                            if (f && "value" in i) {
                                if (((e = n.Utils.indexOf(u, f.value)), e && i.attributes.getNamedItem("name"))) throw new Error("Private card data elements must not contain attribute 'name'");
                                r[f.value] = t.createAccessor(i);
                            }
                        }),
                        r
                    );
                }),
                (t.getDescendants = function (t) {
                    var i = [];
                    return (
                        n.Utils.forEach(["input", "textarea", "select"], function (r) {
                            return n.Utils.forEach(t.getElementsByTagName(r), function (n) {
                                return i.push(n);
                            });
                        }),
                        i
                    );
                }),
                (t.createAccessor = function (n) {
                    return function (t) {
                        if (typeof t != "undefined") n.value = t;
                        else return n.value;
                    };
                }),
                (t.getPrivateTransactionData = function (t) {
                    var i, r, u;
                    return (
                        typeof t.expDateMonthYear != "undefined" ? ((u = n.ValidationHelper.parseMonthYear(t.expDateMonthYear)), (i = u.month), (r = u.year)) : ((i = parseInt(t.expDateMonth, 10)), (r = parseInt(t.expDateYear, 10))),
                        { Number: n.Utils.removeSpaces(t.cardNumber), CVV: n.Utils.removeSpaces(t.cvv), ExpDateMonth: i, ExpDateYear: r }
                    );
                }),
                t
            );
        })();
        n.Checkout = t;
    })(cp || (cp = {}));
