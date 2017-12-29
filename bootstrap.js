if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var o in e)
            if (void 0 !== t.style[o]) return { end: e[o] };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var o = !1,
            i = this;
        t(this)
            .one("bsTransitionEnd", function() { o = !0 });
        var n = function() {
            o || t(i)
                .trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target)
                    .is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.alert");
            n || o.data("bs.alert", n = new i(this)), "string" == typeof e && n[e].call(o)
        })
    }
    var o = '[data-dismiss="alert"]',
        i = function(e) {
            t(e)
                .on("click", o, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function o() {
            r.detach()
                .trigger("closed.bs.alert")
                .remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === s ? [] : s);
        e && e.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", o)
            .emulateTransitionEnd(i.TRANSITION_DURATION) : o())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() { return t.fn.alert = n, this }, t(document)
        .on("click.bs.alert.data-api", o, i.prototype.close)
}(jQuery), + function(t) { "use strict" } + function() { Button.VERSION = "3.3.7", Button.DEFAULTS = { loadingText: "loading..." } } + function(t) {
    Button.prototype.setState = function(e) {
        var o = "disabled",
            i = this.$element,
            n = i.is("input") ? "val" : "html",
            s = i.data();
        e += "Text", null == s.resetText && i.data("resetText", i[n]()), setTimeout(t.proxy(function() {
            i[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(o)
                .attr(o, o)
                .prop(o, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(o)
                .removeAttr(o)
                .prop(o, !1))
        }, this), 0)
    }
} + function() {
    Button.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var o = this.$element.find("input");
            "radio" == o.prop("type") ? (o.prop("checked") && (t = !1), e.find(".active")
                .removeClass("active"), this.$element.addClass("active")) : "checkbox" == o.prop("type") && (o.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), o.prop("checked", this.$element.hasClass("active")), t && o.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    }
} + function(t) {
    function e(e) {
        return this.each(function() {
            var o = t(this),
                i = o.data("bs.button"),
                n = "object" == typeof e && e;
            i || o.data("bs.button", i = new Button(this, n)), "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }
    t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = Button
} + function(t) { t.fn.button.noConflict = function() { return t.fn.button = old, this } } + function(t) {
    t(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            var o = t(e.target)
                .closest(".btn");
            Plugin.call(o, "toggle"), t(e.target)
                .is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible")
                    .first()
                    .trigger("focus"))
        })
        .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            t(e.target)
                .closest(".btn")
                .toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
}(jQuery), + function(t) { "use strict" } + function() { Carousel.VERSION = "3.3.7", Carousel.TRANSITION_DURATION = 600, Carousel.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 } } + function() {
    Carousel.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }
} + function(t) { Carousel.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this } } + function() {
    Carousel.prototype.getItemIndex = function(t) {
        return this.$items = t.parent()
            .children(".item"), this.$items.index(t || this.$active)
    }
} + function() {
    Carousel.prototype.getItemForDirection = function(t, e) {
        var o = this.getItemIndex(e),
            i = "prev" == t && 0 === o || "next" == t && o == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
            s = (o + n) % this.$items.length;
        return this.$items.eq(s)
    }
} + function() {
    Carousel.prototype.to = function(t) {
        var e = this,
            o = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : o == t ? this.pause()
            .cycle() : this.slide(t > o ? "next" : "prev", this.$items.eq(t))
    }
} + function(t) {
    Carousel.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev")
            .length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }
} + function() { Carousel.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, Carousel.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") } } + function(t) {
    Carousel.prototype.slide = function(e, o) {
        var i = this.$element.find(".item.active"),
            n = o || this.getItemForDirection(e, i),
            s = this.interval,
            r = "next" == e ? "left" : "right",
            a = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var l = n[0],
            c = t.Event("slide.bs.carousel", { relatedTarget: l, direction: r });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active")
                    .removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(n)]);
                h && h.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", { relatedTarget: l, direction: r });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, i.addClass(r), n.addClass(r), i.one("bsTransitionEnd", function() {
                    n.removeClass([e, r].join(" "))
                        .addClass("active"), i.removeClass(["active", r].join(" ")), a.sliding = !1, setTimeout(function() { a.$element.trigger(p) }, 0)
                })
                .emulateTransitionEnd(Carousel.TRANSITION_DURATION)) : (i.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    }
} + function(t) {} + function(t) {
    t.fn.carousel;
    t.fn.carousel = Plugin, t.fn.carousel.Constructor = Carousel
} + function(t) { t.fn.carousel.noConflict = function() { return t.fn.carousel = old, this } } + function(t) {} + function(t) {
    t(document)
        .on("click.bs.carousel.data-api", "[data-slide]", clickHandler)
        .on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler), t(window)
        .on("load", function() {
            t('[data-ride="carousel"]')
                .each(function() {
                    var e = t(this);
                    Plugin.call(e, e.data())
                })
        })
}(jQuery), + function(t) { "use strict" } + function() { Collapse.VERSION = "3.3.7", Collapse.TRANSITION_DURATION = 350, Collapse.DEFAULTS = { toggle: !0 } } + function() { Collapse.prototype.dimension = function() { var t = this.$element.hasClass("width"); return t ? "width" : "height" } } + function(t) {
    Collapse.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel")
                .children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var i = t.Event("show.bs.collapse");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                    o && o.length && (Plugin.call(o, "hide"), e || o.data("bs.collapse", null));
                    var n = this.dimension();
                    this.$element.removeClass("collapse")
                        .addClass("collapsing")[n](0)
                        .attr("aria-expanded", !0), this.$trigger.removeClass("collapsed")
                        .attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing")
                            .addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return s.call(this);
                    var r = t.camelCase(["scroll", n].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this))
                        .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[n](this.$element[0][r])
                }
            }
        }
    }
} + function(t) {
    Collapse.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var o = this.dimension();
                this.$element[o](this.$element[o]())[0].offsetHeight, this.$element.addClass("collapsing")
                    .removeClass("collapse in")
                    .attr("aria-expanded", !1), this.$trigger.addClass("collapsed")
                    .attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing")
                        .addClass("collapse")
                        .trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[o](0)
                    .one("bsTransitionEnd", t.proxy(i, this))
                    .emulateTransitionEnd(Collapse.TRANSITION_DURATION) : i.call(this)
            }
        }
    }
} + function() { Collapse.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() } } + function(t) {
    Collapse.prototype.getParent = function() {
        return t(this.options.parent)
            .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
            .each(t.proxy(function(e, o) {
                var i = t(o);
                this.addAriaAndCollapsedClass(getTargetFromTrigger(i), i)
            }, this))
            .end()
    }
} + function() {
    Collapse.prototype.addAriaAndCollapsedClass = function(t, e) {
        var o = t.hasClass("in");
        t.attr("aria-expanded", o), e.toggleClass("collapsed", !o)
            .attr("aria-expanded", o)
    }
} + function(t) {} + function(t) {} + function(t) {
    t.fn.collapse;
    t.fn.collapse = Plugin, t.fn.collapse.Constructor = Collapse
} + function(t) { t.fn.collapse.noConflict = function() { return t.fn.collapse = old, this } } + function(t) {
    t(document)
        .on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
            var o = t(this);
            o.attr("data-target") || e.preventDefault();
            var i = getTargetFromTrigger(o),
                n = i.data("bs.collapse"),
                s = n ? "toggle" : o.data();
            Plugin.call(i, s)
        })
}(jQuery), + function(t) {
    "use strict";
    var e = function(e) {
        t(e)
            .on("click.bs.dropdown", this.toggle)
    };
    e.VERSION = "3.3.7"
} + function(t) {} + function(t) {} + function(t) {
    Dropdown.prototype.toggle = function(e) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var i = getParent(o),
                n = i.hasClass("open");
            if (clearMenus(), !n) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav")
                    .length && t(document.createElement("div"))
                    .addClass("dropdown-backdrop")
                    .insertAfter(t(this))
                    .on("click", clearMenus);
                var s = { relatedTarget: this };
                if (i.trigger(e = t.Event("show.bs.dropdown", s)), e.isDefaultPrevented()) return;
                o.trigger("focus")
                    .attr("aria-expanded", "true"), i.toggleClass("open")
                    .trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }
} + function(t) {
    Dropdown.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var o = t(this);
            if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
                var i = getParent(o),
                    n = i.hasClass("open");
                if (!n && 27 != e.which || n && 27 == e.which) return 27 == e.which && i.find(toggle)
                    .trigger("focus"), o.trigger("click");
                var s = " li:not(.disabled):visible a",
                    r = i.find(".dropdown-menu" + s);
                if (r.length) {
                    var a = r.index(e.target);
                    38 == e.which && a > 0 && a--, 40 == e.which && a < r.length - 1 && a++, ~a || (a = 0), r.eq(a)
                        .trigger("focus")
                }
            }
        }
    }
} + function(t) {} + function(t) {
    t.fn.dropdown;
    t.fn.dropdown = Plugin, t.fn.dropdown.Constructor = Dropdown
} + function(t) { t.fn.dropdown.noConflict = function() { return t.fn.dropdown = old, this } } + function(t) {
    t(document)
        .on("click.bs.dropdown.data-api", clearMenus)
        .on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() })
        .on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown)
        .on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown)
}(jQuery), + function(t) { "use strict" } + function() { Modal.VERSION = "3.3.7", Modal.TRANSITION_DURATION = 300, Modal.BACKDROP_TRANSITION_DURATION = 150, Modal.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, Modal.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) } } + function(t) {
    Modal.prototype.show = function(e) {
        var o = this,
            i = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target)
                    .is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var i = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent()
                .length || o.$element.appendTo(o.$body), o.$element.show()
                .scrollTop(0), o.adjustDialog(), i && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var n = t.Event("shown.bs.modal", { relatedTarget: e });
            i ? o.$dialog.one("bsTransitionEnd", function() {
                    o.$element.trigger("focus")
                        .trigger(n)
                })
                .emulateTransitionEnd(Modal.TRANSITION_DURATION) : o.$element.trigger("focus")
                .trigger(n)
        }))
    }
} + function(t) {
    Modal.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document)
            .off("focusin.bs.modal"), this.$element.removeClass("in")
            .off("click.dismiss.bs.modal")
            .off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this))
            .emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal())
    }
} + function(t) {
    Modal.prototype.enforceFocus = function() {
        t(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", t.proxy(function(t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target)
                    .length || this.$element.trigger("focus")
            }, this))
    }
} + function(t) { Modal.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") } } + function(t) {
    Modal.prototype.resize = function() {
        this.isShown ? t(window)
            .on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window)
            .off("resize.bs.modal")
    }
} + function() {
    Modal.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") })
    }
} + function() { Modal.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null } } + function(t) {
    Modal.prototype.backdrop = function(e) {
        var o = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && i;
            if (this.$backdrop = t(document.createElement("div"))
                .addClass("modal-backdrop " + i)
                .appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() { o.removeBackdrop(), e && e() };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }
} + function() { Modal.prototype.handleUpdate = function() { this.adjustDialog() } } + function() {
    Modal.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" })
    }
} + function() {
    Modal.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, Modal.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }
} + function() {
    Modal.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, Modal.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, Modal.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    }
} + function(t) {
    function e(e, o) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.modal"),
                s = t.extend({}, Modal.DEFAULTS, i.data(), "object" == typeof e && e);
            n || i.data("bs.modal", n = new Modal(this, s)), "string" == typeof e ? n[e](o) : s.show && n.show(o)
        })
    }
    t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = Modal
} + function(t) { t.fn.modal.noConflict = function() { return t.fn.modal = old, this } } + function(t) {
    t(document)
        .on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
            var o = t(this),
                i = o.attr("href"),
                n = t(o.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                s = n.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(i) && i }, n.data(), o.data());
            o.is("a") && e.preventDefault(), n.one("show.bs.modal", function(t) { t.isDefaultPrevented() || n.one("hidden.bs.modal", function() { o.is(":visible") && o.trigger("focus") }) }), Plugin.call(n, s, this)
        })
}(jQuery), + function() {
    "use strict";
    var t = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
    t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }
} + function(t) {
    Tooltip.prototype.init = function(e, o, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(o), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var r = n[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
    }
} + function(t) { Tooltip.prototype.getDefaults = function() { return Tooltip.DEFAULTS }, Tooltip.prototype.getOptions = function(e) { return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e } } + function(t) {
    Tooltip.prototype.getDelegateOptions = function() {
        var e = {},
            o = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) { o[t] != i && (e[t] = i) }), e
    }
} + function(t) {
    Tooltip.prototype.enter = function(e) {
        var o = e instanceof this.constructor ? e : t(e.currentTarget)
            .data("bs." + this.type);
        return o || (o = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget)
                .data("bs." + this.type, o)), e instanceof t.Event && (o.inState["focusin" == e.type ? "focus" : "hover"] = !0), o.tip()
            .hasClass("in") || "in" == o.hoverState ? void(o.hoverState = "in") : (clearTimeout(o.timeout), o.hoverState = "in", o.options.delay && o.options.delay.show ? void(o.timeout = setTimeout(function() { "in" == o.hoverState && o.show() }, o.options.delay.show)) : o.show())
    }
} + function() {
    Tooltip.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }
} + function(t) {
    Tooltip.prototype.leave = function(e) {
        var o = e instanceof this.constructor ? e : t(e.currentTarget)
            .data("bs." + this.type);
        return o || (o = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget)
            .data("bs." + this.type, o)), e instanceof t.Event && (o.inState["focusout" == e.type ? "focus" : "hover"] = !1), o.isInStateTrue() ? void 0 : (clearTimeout(o.timeout), o.hoverState = "out", o.options.delay && o.options.delay.hide ? void(o.timeout = setTimeout(function() { "out" == o.hoverState && o.hide() }, o.options.delay.hide)) : o.hide())
    }
} + function(t) {
    Tooltip.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var i = this,
                n = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), n.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(r);
            l && (r = r.replace(a, "") || "top"), n.detach()
                .css({ top: 0, left: 0, display: "block" })
                .addClass(r)
                .data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                h = n[0].offsetWidth,
                p = n[0].offsetHeight;
            if (l) {
                var d = r,
                    f = this.getPosition(this.$viewport);
                r = "bottom" == r && c.bottom + p > f.bottom ? "top" : "top" == r && c.top - p < f.top ? "bottom" : "right" == r && c.right + h > f.width ? "left" : "left" == r && c.left - h < f.left ? "right" : r, n.removeClass(d)
                    .addClass(r)
            }
            var u = this.getCalculatedOffset(r, c, h, p);
            this.applyPlacement(u, r);
            var g = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", g)
                .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : g()
        }
    }
} + function(t) {
    Tooltip.prototype.applyPlacement = function(e, o) {
        var i = this.tip(),
            n = i[0].offsetWidth,
            s = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(i[0], t.extend({ using: function(t) { i.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == o && c != s && (e.top = e.top + s - c);
        var h = this.getViewportAdjustedDelta(o, e, l, c);
        h.left ? e.left += h.left : e.top += h.top;
        var p = /top|bottom/.test(o),
            d = p ? 2 * h.left - n + l : 2 * h.top - s + c,
            f = p ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][f], p)
    }
} + function() {
    Tooltip.prototype.replaceArrow = function(t, e, o) {
        this.arrow()
            .css(o ? "left" : "top", 50 * (1 - t / e) + "%")
            .css(o ? "top" : "left", "")
    }, Tooltip.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }
} + function(t) {
    Tooltip.prototype.hide = function(e) {
        function o() {
            "in" != i.hoverState && n.detach(), i.$element && i.$element.removeAttr("aria-describedby")
                .trigger("hidden.bs." + i.type), e && e()
        }
        var i = this,
            n = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", o)
            .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }
} + function() {
    Tooltip.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "")
            .attr("title", "")
    }, Tooltip.prototype.hasContent = function() { return this.getTitle() }
} + function(t) {
    Tooltip.prototype.getPosition = function(e) {
        e = e || this.$element;
        var o = e[0],
            i = "BODY" == o.tagName,
            n = o.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, { width: n.right - n.left, height: n.bottom - n.top }));
        var s = window.SVGElement && o instanceof window.SVGElement,
            r = i ? { top: 0, left: 0 } : s ? null : e.offset(),
            a = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
            l = i ? {
                width: t(window)
                    .width(),
                height: t(window)
                    .height()
            } : null;
        return t.extend({}, n, a, l, r)
    }
} + function() { Tooltip.prototype.getCalculatedOffset = function(t, e, o, i) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - o / 2 } : "top" == t ? { top: e.top - i, left: e.left + e.width / 2 - o / 2 } : "left" == t ? { top: e.top + e.height / 2 - i / 2, left: e.left - o } : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width } } } + function() {
    Tooltip.prototype.getViewportAdjustedDelta = function(t, e, o, i) {
        var n = { top: 0, left: 0 };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + i;
            a < r.top ? n.top = r.top - a : l > r.top + r.height && (n.top = r.top + r.height - l)
        } else {
            var c = e.left - s,
                h = e.left + s + o;
            c < r.left ? n.left = r.left - c : h > r.right && (n.left = r.left + r.width - h)
        }
        return n
    }
} + function(t) {
    Tooltip.prototype.getTitle = function() {
        var t, e = this.$element,
            o = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof o.title ? o.title.call(e[0]) : o.title)
    }, Tooltip.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t)); return t }, Tooltip.prototype.tip = function() { if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }
} + function() {
    Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip()
            .find(".tooltip-arrow")
    }, Tooltip.prototype.enable = function() { this.enabled = !0 }, Tooltip.prototype.disable = function() { this.enabled = !1 }, Tooltip.prototype.toggleEnabled = function() { this.enabled = !this.enabled }
} + function(t) {
    Tooltip.prototype.toggle = function(e) {
        var o = this;
        e && (o = t(e.currentTarget)
                .data("bs." + this.type), o || (o = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget)
                    .data("bs." + this.type, o))), e ? (o.inState.click = !o.inState.click, o.isInStateTrue() ? o.enter(o) : o.leave(o)) : o.tip()
            .hasClass("in") ? o.leave(o) : o.enter(o)
    }
} + function() {
    Tooltip.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type)
                .removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    }
} + function(t) {
    function e(e) {
        return this.each(function() {
            var o = t(this),
                i = o.data("bs.tooltip"),
                n = "object" == typeof e && e;
            !i && /destroy|hide/.test(e) || (i || o.data("bs.tooltip", i = new Tooltip(this, n)), "string" == typeof e && i[e]())
        })
    }
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = Tooltip, t.fn.tooltip.noConflict = function() { return t.fn.tooltip = o, this }
}(jQuery), + function(t) {
    "use strict";
    var e = function(t, e) { this.init("popover", t, e) };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' })
} + function(t) { Popover.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), Popover.prototype.constructor = Popover, Popover.prototype.getDefaults = function() { return Popover.DEFAULTS } } + function() {
    Popover.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            o = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")
            .children()
            .detach()
            .end()[this.options.html ? "string" == typeof o ? "html" : "append" : "text"](o), t.removeClass("fade top bottom left right in"), t.find(".popover-title")
            .html() || t.find(".popover-title")
            .hide()
    }
} + function() {
    Popover.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, Popover.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip()
            .find(".arrow")
    }
} + function(t) {
    function e(e) {
        return this.each(function() {
            var o = t(this),
                i = o.data("bs.popover"),
                n = "object" == typeof e && e;
            !i && /destroy|hide/.test(e) || (i || o.data("bs.popover", i = new Popover(this, n)), "string" == typeof e && i[e]())
        })
    }
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = Popover, t.fn.popover.noConflict = function() { return t.fn.popover = o, this }
}(jQuery), + function(t) {
    "use strict";

    function e(o, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(o)
            .is(document.body) ? window : o), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }
    e.VERSION = "3.3.7", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }
} + function(t) {
    ScrollSpy.prototype.refresh = function() {
        var e = this,
            o = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (o = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector)
            .map(function() {
                var e = t(this),
                    n = e.data("target") || e.attr("href"),
                    s = /^#./.test(n) && t(n);
                return s && s.length && s.is(":visible") && [
                    [s[o]()
                        .top + i, n
                    ]
                ] || null
            })
            .sort(function(t, e) { return t[0] - e[0] })
            .each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) })
    }
} + function() {
    ScrollSpy.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            o = this.getScrollHeight(),
            i = this.options.offset + o - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != o && this.refresh(), e >= i) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) r != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }
} + function(t) {
    ScrollSpy.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var o = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(o)
            .parents("li")
            .addClass("active");
        i.parent(".dropdown-menu")
            .length && (i = i.closest("li.dropdown")
                .addClass("active")), i.trigger("activate.bs.scrollspy")
    }
} + function(t) {
    ScrollSpy.prototype.clear = function() {
        t(this.selector)
            .parentsUntil(this.options.target, ".active")
            .removeClass("active")
    }
} + function(t) {
    function e(e) {
        return this.each(function() {
            var o = t(this),
                i = o.data("bs.scrollspy"),
                n = "object" == typeof e && e;
            i || o.data("bs.scrollspy", i = new ScrollSpy(this, n)), "string" == typeof e && i[e]()
        })
    }
    var o = t.fn.scrollspy;
    t.fn.scrollspy = e, t.fn.scrollspy.Constructor = ScrollSpy, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = o, this }
} + function(t) {
    t(window)
        .on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]')
                .each(function() {
                    var e = t(this);
                    Plugin.call(e, e.data())
                })
        })
}(jQuery), + function(t) {
    "use strict";
    var e = function(e) { this.element = t(e) };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
        var e = this.element,
            o = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li")
            .hasClass("active")) {
            var n = o.find(".active:last a"),
                s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                r = t.Event("show.bs.tab", { relatedTarget: n[0] });
            if (n.trigger(s),
                e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), o), this.activate(a, a.parent(), function() { n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] }) })
            }
        }
    }
} + function(t) {
    Tab.prototype.activate = function(e, o, i) {
        function n() {
            s.removeClass("active")
                .find("> .dropdown-menu > .active")
                .removeClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !1), e.addClass("active")
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu")
                .length && e.closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0), i && i()
        }
        var s = o.find("> .active"),
            r = i && t.support.transition && (s.length && s.hasClass("fade") || !!o.find("> .fade")
                .length);
        s.length && r ? s.one("bsTransitionEnd", n)
            .emulateTransitionEnd(Tab.TRANSITION_DURATION) : n(), s.removeClass("in")
    }
} + function(t) {
    function e(e) {
        return this.each(function() {
            var o = t(this),
                i = o.data("bs.tab");
            i || o.data("bs.tab", i = new Tab(this)), "string" == typeof e && i[e]()
        })
    }
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = Tab, t.fn.tab.noConflict = function() { return t.fn.tab = o, this }
} + function(t) {
    var e = function(e) { e.preventDefault(), Plugin.call(t(this), "show") };
    t(document)
        .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
        .on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(t) {
    "use strict";
    var e = function(o, i) {
        this.options = t.extend({}, e.DEFAULTS, i), this.$target = t(this.options.target)
            .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
            .on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(o), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    e.VERSION = "3.3.7", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = { offset: 0, target: window }
} + function() {
    Affix.prototype.getState = function(t, e, o, i) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != o && "top" == this.affixed) return o > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != o ? n + this.unpin <= s.top ? !1 : "bottom" : t - i >= n + r ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? n : s.top,
            c = a ? r : e;
        return null != o && o >= n ? "top" : null != i && l + c >= t - i ? "bottom" : !1
    }
} + function(t) {
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET)
            .addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, Affix.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }
} + function(t) {
    Affix.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                i = o.top,
                n = o.bottom,
                s = Math.max(t(document)
                    .height(), t(document.body)
                    .height());
            "object" != typeof o && (n = i = o), "function" == typeof i && (i = o.top(this.$element)), "function" == typeof n && (n = o.bottom(this.$element));
            var r = this.getState(s, e, i, n);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (r ? "-" + r : ""),
                    l = t.Event(a + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(Affix.RESET)
                    .addClass(a)
                    .trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({ top: s - e - n })
        }
    }
} + function(t) {
    function e(e) {
        return this.each(function() {
            var o = t(this),
                i = o.data("bs.affix"),
                n = "object" == typeof e && e;
            i || o.data("bs.affix", i = new Affix(this, n)), "string" == typeof e && i[e]()
        })
    }
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = Affix, t.fn.affix.noConflict = function() { return t.fn.affix = o, this }
} + function(t) {
    t(window)
        .on("load", function() {
            t('[data-spy="affix"]')
                .each(function() {
                    var e = t(this),
                        o = e.data();
                    o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), Plugin.call(e, o)
                })
        })
}(jQuery);