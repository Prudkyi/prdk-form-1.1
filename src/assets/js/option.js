export function getOptions(clickSelect, dataEl) {

    let workArr = [];
    // SELECT 1

    if (clickSelect === 1) {
        // Формуємо список для селекта №2
        if (dataEl === '101') {
            workArr = [
                'חטיבה במדעי הנתונים ו-AI',
                'רפואה ומקצועות הבריאות',
                'מדעים מדויקים',
                'מדעי החיים',
                'הנדסה',
                'מדעי הרוח',
                'חינוך',
                'אמנויות',
                'מדעי החברה',
                'עבודה סוציאלית',
                'ניהול',
                'משפטים',
                'מדעי המוח',
                'תוכנית למצטיינים'
            ];
            return buildSelect(workArr, '2-1');
        } else if (dataEl === '102') {
            workArr = [
                'רפואה ומקצועות הבריאות',
                'מדעים מדויקים',
                'מדעי החיים',
                'הנדסה',
                'מדעי הרוח',
                'חינוך',
                'אמנויות',
                'מדעי החברה',
                'עבודה סוציאלית',
                'ניהול',
                'משפטים',
                'מדעי המוח'
            ];
            return buildSelect(workArr, '2-2');
        }


    }

    // SELECT 2

    if (clickSelect === 2) {

        if (dataEl === '2-1-1') {
            workArr = [
                'פסיכולוגיה עם חטיבה בבינה מלאכותית ובמדעי הנתונים',
                'כלכלה עם חטיבה בבינה מלאכותית ובמדעי הנתונים',
                'תוכנית לימודים חד-חוגית במשפטים עם חטיבה בבינה מלאכותית',
                'ביולוגיה עם חטיבה בבינה מלאכותית ובמדעי הנתונים'
            ];
            return buildSelect(workArr, '3-1');
        } else if (dataEl === '2-1-2') {
            workArr = [
                'ד"ר לרפואה',
                'מדעי החיים ומדעי הרפואה',
                'הפרעות בתקשורת',
                'סיעוד',
                'פיזיותרפיה',
                'ריפוי בעיסוק',
                'רפואת שיניים',
                'סיעוד הסבת  אקדמאים'
            ];
            return buildSelect(workArr, '3-2');
        } else if (dataEl === '2-1-3') {
            workArr = [
                'פיזיקה',
                'גיאופיזיקה',
                'כימיה',
                'כימיה למצטיינים',
                'תואר כפול בכימיה ובמדע והנדסה של חומרים',
                'מתמטיקה',
                'מתמטיקה שימשוית וסטטיסטיקה להיי-טק',
                'סטטיסטיקה וחקר ביצועים',
                'מדעי המחשב',
                'מחשוב קוונטים',
                'מדעי הנתונים',
            ];
            return buildSelect(workArr, '3-2');
        } else if (dataEl === '2-1-4') {
            workArr = [
                'מחלקה לביולוגיה מולקולרית ואקולוגיה של צמחים',
                'ביולוגיה',
                'מדעי החיים ומדעי הרפואה',
                'ביולוגיה ומדעי המחשב עם המתחות בביואינפורמטיקה',
                'ביולוגיה - תוכנית מצטיינים',
                'ביולוגיה וביוטכנולוגיה ',
                'ביולוגיה עם חטיבה בבינה מלאכותית ובמדעי הנתונים',
                'אקולוגיה ואבולוציה',
            ];
            return buildSelect(workArr, '3-3');
        } else if (dataEl === '2-1-5') {
            workArr = [
                'הנדסת חשמל ופיזיקה',
                'הנדסת חשמל',
                'הנדסה מכנית',
                'הנדסה מכנית בדגש לימודי סביבה',
                'הנדסה ביו-רפואית',
                'מדעים דיגיטליים להייטק',
                'הנדסת תעשייה',
                'מדע והנדסה של חומרים',
                'תואר כפול במדע והנדסה של חומרים ובכימיה',
            ];
            return buildSelect(workArr, '3-4');
        } else if (dataEl === '2-1-6') {
            workArr = [
                'לימודי נשים ומגדר',
                'מקרא',
                'לשון עברית',
                'פילוספיה יהודית',
                'פילוסופיה',
                'היסטוריה כללית',
                'היסטוריה של המזרח התיכון ואפריקה',
                'בלשנות שמית',
                'ספרות אנגלית ולימודים אמריקניים',
                'בלשנות',
                'לימודי ערבית ואסלאם',
                'פכ"מ',
                'התוכנית הרב-תחומית',
                'תרבות צרפת',
                'ארכיאולוגיה ותרבויות המזרח הקדום',
                'לימודים קלאסיים',
                'היסטוריה של עם ישראל',
                'ספרות',
                'תלמוד',
                'לימודי אפריקה בתוכנית הבין-אוניברסיטאית',
                'התוכנית ללימודי תרבות ערבית-יהודית',
                'לימודי מזרח אסיה',
                'בלשנות חישובית',
                'חקר התודעה והקוגניציה',
            ];
            return buildSelect(workArr, '3-5');
        } else if (dataEl === '2-1-7') {
            workArr = [
                'חינוך'
            ];
            return buildSelect(workArr, '3-6');
        } else if (dataEl === '2-1-8') {
            workArr = [
                'מוזיקה',
                'קולנוע וטלוויזיה',
                'מסלול למצטיינים בעיצוב במה, קולנוע וטלוויזיה',
                'קולנוע וטלוויזיה מסלול מדיה דיגיטלית',
                'אדריכלות',
                'אמנוות התיאטרון',
                'תולדות האמנות',
                'התוכנית הרב-תחומית באמנויות',
                'מצטיינים במשחק במסגרת תואר ראשון ותואר שני באמנות התאטרון',
            ];
            return buildSelect(workArr, '3-7');
        } else if (dataEl === '2-1-9') {
            workArr = [
                'כלכלה ',
                'פסיכולוגיה',
                'מדע המדינה',
                'סוציולוגיה ואנתרופולוגיה',
                'לימודי עבודה',
                'תקשורת',
                'מנהיגות ומשאבי אנוש',
                'חקר חברה דיגיטלית-מסלול דו-חוגי במסגרת החוגים סוצולוגיה אנתרופולוגיה ותקשורת',
                'פסיכולוגיה עם חטיבה בבינה מלאכותית ובמדעי הנתונים',
                'כלכלה עם חטיבה בבינה מלאכותית ובמדעי הנתונים',
            ];
            return buildSelect(workArr, '3-8');
        } else if (dataEl === '2-1-10') {
            workArr = [
                'עבודה סוציאלית'
            ];
            return buildSelect(workArr, '3-19');
        } else if (dataEl === '2-1-11') {
            workArr = [
                'חשבונאות',
                'ניהול',
            ];
            return buildSelect(workArr, '3-10');
        } else if (dataEl === '2-1-12') {
            workArr = [
                'משפטים',
                'תוכנית לימודים חד-חוגית במשפטים עם חטיבה בבינה מלאכותית'
            ];
            return buildSelect(workArr, '3-11');
        } else if (dataEl === '2-1-13') {
            workArr = [
                'מדעי המוח',
                'פסיכולוגיה ומדעי המחשב בדגש מדעי המוח',
                'פסיכולוגיה וביולוגיה בדגש מדעי המוח',
                'מדעי המחשב בדגש מדעי המוח',
                'ביולוגיה בדגש מדעי המוח',
                'הנדסה ביו-רפואית וביולוגיה בדגש מדעי המוח',
                'ביולוגיה ובלשנות בדגש מדעי המוח',
                'סטטיסטיקה וחקר ביצועים עם חטיבה במדעי המוח',
                'פיזיקה בדגש מוח',
            ];
            return buildSelect(workArr, '3-12');
        } else if (dataEl === '2-1-14') {
            workArr = [
                'התוכנית הבין-תחומית למצטיינים',
                'התוכנית החד-תחומית למצטיינים',
                'כימיה למצטיינים'
            ];
            return buildSelect(workArr, '3-13');

            // ************   Str. 2

        } else if (dataEl === '2-2-1') {
            workArr = [
                'רפואה לבעלי תואר ראשון',
                'בריאות הציבור',
                'אפידמיולוגיה',
                'הפרעות בתקשורת',
                'סיעוד ',
                'פיזיותרפיה',
                'ריפוי בעיסוק',
                'ניהול במצבי חירום ואסון',
                'מדעי רפואת השיניים',
                'פיזיולוגיה של המאמץ',
            ];
            return buildSelect(workArr, '3-2-0');
        } else if (dataEl === '2-2-2') {
            workArr = [
                'לימודי פיזיקה',
                'גיאופיזיקה',
                'לימודי הסביבה',
                'לימודי הסביבה - תוכנית בשפה האנגלית',
                'גאוגרפיה וסביבת האדם',
                'כימיה',
                'סטטיסטיקה וחקר ביצועים',
                'מתמטיקה',
                'מדעי המחשב',
                'ביואינפורמטיקה',
                'גיאוגרפיה וסביבת האדם',
            ];
            return buildSelect(workArr, '3-2-1');
        } else if (dataEl === '2-2-3') {
            workArr = [
                'ביוכימיה',
                'זואולוגיה',
                'מדעי הצמח ואבטחת מזון',
                'ביולוגיה של התא ואימונולוגיה',
                'ביוטכנולוגיה',
                'ביולוגיה',
                'נוירובילוגיה',
                'ביולוגיה תיאורטית ומתמטית',
                'אקולוגיה ואיכות סביבה',
                'גנטיקה',
                'ביואינפורמטיקה',
                'מיקרוביולוגיה',
                'ביולוגיה עם חטיבה בבינה מלאכותית ובמדעי הנתונים',
            ];
            return buildSelect(workArr, '3-2-2');
        } else if (dataEl === '2-2-4') {
            workArr = [
                'הנדסת חשמל',
                'הנדסה מכנית',
                'הנדסת סביבה',
                'הנדסת מערכות',
                'הנדסה ביו-רפואית',
                'הנדסת תעשייה',
                'מדע והנדסה של חומרים',
                'מאסטר-טראק בהנדסה - AI אינטליגנציה מלאכותית',
                'מאסטר-טראק בהנדסה - עיבוד אותות ותמונות',
                'מאסטר-טראק במדעי הנתונים',
            ];
            return buildSelect(workArr, '3-2-3');
        } else if (dataEl === '2-2-5') {
            workArr = [
                'היסטוריה',
                'מחקר תרבות הילד והנוער',
                'לימודי מגדר',
                'מקרא',
                'לשון עברית',
                'פילוסופיה יהודית',
                'פילוסופיה',
                'היסטוריה כללית',
                'בלשנות שמית',
                'לימודי  אנגלית',
                'לימודי ערבית ואסלאם',
                'מדעי היהדות וארכיאולוגיה',
                'תרבות צרפת',
                'מחקר התרבות',
                'ארכיאולוגיה ותרבות המזרח הקדום ',
                'לימודים קלאסיים',
                'היסטוריה של עם ישראל',
                'ספרות ',
                'תלמוד',
                'לימודי מזרח אסיה',
                'לימודים קוגניטיביים של השפה ושימושיה',
                'תרבות עברית',
                'מדעי הדתות',
                'עריכה לשונית',
                'היסטוריה של המזרח התיכון ואפריקה',
                'ההיסטוריה של המזה"ת ואפריקה (בן-זמננו)- בשנה אחת',
                'היסטוריה ופילוסופיה של המדעים והרעיונות',
                'לימודי ישראל הקדום',
                'ספרות יידיש'
            ];
            return buildSelect(workArr, '3-2-4');
        } else if (dataEl === '2-2-6') {
            workArr = [
                'ייעוץ חינוכי',
                'מינהל ומנהיגות בחינוך',
                'מינהל ומנהיגות בחינוך - בשנה אחת',
                'לקויות למידה',
                'מדיניות החינוך',
                'חינוך רב לשוני',
                'הוראת המדעים- התמחות טכנולוגיה ולמידה',
                'הוראת מדעים וטכנולוגיה',
                'הוראת השפות',
            ];
            return buildSelect(workArr, '3-2-5');
        } else if (dataEl === '2-2-7') {
            workArr = [
                'מוזיקה',
                'קולנוע וטלוויזיה',
                'קולנוע וטלוויזיה - מעשי',
                'קולנוע וטלוויזיה מסלול קולנוע דוקומנטרי',
                'קולנוע וטלוויזיה מסלול מדיה דיגיטלית',
                'אדריכלות',
                'התוכנית הבינתחומית באמנויות',
                'אמנוות התיאטרון',
                'תולדות האמנות',
                'מוזיקולוגיה',
                'הבעה ויצירה באמנות',
            ];
            return buildSelect(workArr, '3-2-6');
        } else if (dataEl === '2-2-8') {
            workArr = [
                'כלכלה ',
                'לימודי פוליטיקה, סייבר וממשל',
                'מדע המדינה',
                'דיפלומטיה ולימודי ביטחון',
                'לימודי הגירה Migration Studies',
                'סוציולוגיה ואנתרופולוגיה',
                'לימודי דיפלומטיה',
                'לימודי ביטחון',
                'לימודי ביטחון ודיפלומטיה בשנה אחת',
                'ניהול סכסוכים וגישור',
                'לימודי עבודה',
                'לימודי עבודה - בשנה אחת',
                'מדיניות ציבורית - בשנה אחת',
                'פסיכולוגיה',
                'מדיניות ציבורית',
                'תקשורת',
                'ארצות מתפתחות',
            ];
            return buildSelect(workArr, '3-2-7');
        } else if (dataEl === '2-2-9') {
            workArr = [
                'עבודה סוציאלית',
                'תוכנית ההשלמה לתואר שני בעבודה סוציאלית',
            ];
            return buildSelect(workArr, '3-2-8');
        } else if (dataEl === '2-2-10') {
            workArr = [
                'מנהל עסקים MBA',
                'של רקנאטי Executive MBA',
                'תואר שני (M.Sc.) במדעי הניהול',
            ];
            return buildSelect(workArr, '3-2-9');
        } else if (dataEl === '2-2-11') {
            workArr = [
                'משפטים מסלול מחקרי',
                'משפטים מסלול עיוני',
                'משפטים עם התמחות במשפט מסחרי בשיתוף אוניברסיטת ברקלי',
                'משפטים עם התמחות במשפט ציבורי בשיתוף אוניברסיטת נורת\'ווסטרן',
            ];
            return buildSelect(workArr, '3-2-10');
        } else if (dataEl === '2-2-12') {
            workArr = [
                'מדעי המוח',
                'מאסטר-טראק במדעי המוח - מיפוי המוח',
                'מאסטר-טראק במדעי המוח - חישובית עצבית',
            ];
            return buildSelect(workArr, '3-2-11');
        }



    }

}

function buildSelect(array, num) {
    let html = '',
        i = 1;
    array.forEach(function (elem) {
        html += '<li data-list="' + num + '-' + i + '" dir="rtl">' + elem + '</li>';
        i++;
    });
    return html;
}