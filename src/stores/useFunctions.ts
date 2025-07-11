import Swal from 'sweetalert2'

import { useDateFormat, useOnline, useTimeAgo } from '@vueuse/core';
import { createPopper, type VirtualElement } from '@popperjs/core'

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type DebounceFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;


export default {

    isEmailFormat: (email: string) => {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email)
    },

    isExtension: (fileName: string, requiredFormats: string[]) => {
        const regex = new RegExp('[^.]+$');
        const ext: any = fileName.match(regex);
        // get the extension
        const fileExtension = ext[0].toLowerCase()
        //make sure the file is a valid  format
        if (!(requiredFormats.some(x => x == fileExtension.toLowerCase()))) return false
        else return true
    },

    passwordRegex: (password: string) => {
        /*Minimum of 8 characters, One special character,  A number*/
        const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
        return regex.test(password)
    },

    truncateStr(str: string, num: number) {
        if (str && str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    },

    addWeekdaysToDate(startDate: Date, days: number) {
        let count = 0;
        const currentDate = new Date(startDate);
        while (count < days) {
            currentDate.setDate(currentDate.getDate() + 1);
            // Skip weekends (Saturday AND Sunday)
            if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                count++;
            }
        }
        return currentDate;
    },

    toast: (text: string, icon: 'warning' | 'success' | 'error' | 'info') => {
        Swal.fire({
            toast: true,
            icon: `${icon}`,
            text: `${text}`,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            padding: 10,
            // iconColor: '#2c3e50',
        })
    },

    toastShort: (text: string) => {
        Swal.fire({
            toast: true,
            text: `${text}`,
            position: 'top-right',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
            padding: 10,
        })
    },

    confirm: (text: string, btnText: string) => {
        return Swal.fire({
            // title: `${title}`,
            text: `${text}`,
            icon: 'question',
            iconColor: '#873A70',
            showCancelButton: true,
            confirmButtonText: `${btnText}`,
            cancelButtonText: 'cancel',
            confirmButtonColor: '#873A70',
            reverseButtons: true,
            width: '300px',
        })
    },

    confirmDelete: (text: string, btnText: string) => {
        return Swal.fire({
            // title: `${title}`,
            text: `${text}`,
            icon: 'warning',
            iconColor: '#dc3545',
            showCancelButton: true,
            confirmButtonText: `${btnText}`,
            cancelButtonText: 'cancel',
            confirmButtonColor: '#dc3545',
            reverseButtons: true,
            width: '300px',
        })
    },

    addCommas: (numb: any) => {
        if (isNaN(numb)) return "0";

        // Convert to number and round to two decimal places
        const rounded = Math.round(Number(numb) * 100) / 100;

        // Split into integer and decimal parts
        const str = rounded.toString().split(".");

        // Add commas to the integer part
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // Ensure two decimal places for the fractional part
        if (str[1]) str[1] = str[1].padEnd(2, "0");

        return str.join(".");
    },



    isOnline: () => {
        const online = useOnline()
        return online.value;
    },

    capsFirstLetter: (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    },

    debounce: <T extends (...args: any[]) => any>(func: T, delay: number): DebounceFunction<T> => {
        let timer: ReturnType<typeof setTimeout> | undefined;
        return (...args: Parameters<T>) => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    },

    greet: () => {
        const currentTime = new Date().getHours();
        return currentTime < 12
            ? "Good morning"
            : currentTime < 18
                ? "Good afternoon"
                : "Good evening";
    },

    dateDisplay: (date: Date | string, format = 'MMM D, YYYY') => {

        if (!date) return '-';

        // If the date is a string, attempt to convert it to a Date
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            return '-';
        }

        const dd = useDateFormat(parsedDate, format);
        return dd.value;
    },

    dateTimeDisplay: (date: Date | string, format = 'MMM D, YYYY -  hh:mm a') => {

        if (!date) return '-';

        // If the date is a string, attempt to convert it to a Date
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            return '-';
        }

        const dd = useDateFormat(parsedDate, format);
        return dd.value;
    },

    timeAgo: (date: Date) => {
        const timeAgo = useTimeAgo(new Date(date));
        return timeAgo.value;
    },

    addDaysToDate: (data: Date, num: number) => {
        const movedDate = new Date(data);
        movedDate.setDate(movedDate.getDate() + num);
        return movedDate;
    },

    vueSelectPositionCalc: (dropdownList: HTMLElement, component: { $refs: { toggle: Element | VirtualElement; }; $el: { classList: { toggle: (arg0: string, arg1: boolean) => void; }; }; }, { width }: any) => {
        dropdownList.style.width = width

        const calculatePlacement = () => {
            const rect = component.$refs.toggle.getBoundingClientRect()
            const viewportHeight = window.innerHeight

            const spaceAbove = rect.top
            const spaceBelow = viewportHeight - rect.bottom

            return spaceBelow < spaceAbove ? 'top' : 'bottom'
        }

        const placement = calculatePlacement()

        const popper = createPopper(component.$refs.toggle, dropdownList, {
            placement: placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, -1],
                    },
                },
                {
                    name: 'toggleClass',
                    enabled: true,
                    phase: 'write',
                    fn({ state }) {
                        component.$el.classList.toggle(
                            'drop-up',
                            state.placement === 'top'
                        )
                    },
                },
            ],
        })

        return () => popper.destroy()
    },


    arrayPropSum(array: any[], prop: string) {
        return array.reduce((total: number, array: any) => total + parseFloat(array[prop]), 0)
    },

    isValidUrl(url: string) {
        if (!url) return false; // Ensure the URL is not empty
        const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/.*)?$/;
        return regex.test(url);
    },

    generateTimeOptions: (startHour: number, endHour: number) => {
        const times = [];
        for (let hour = startHour; hour <= endHour; hour++) {
            const isPM = hour >= 12;
            const displayHour = hour % 12 || 12;
            const label = `${displayHour}${isPM ? 'PM' : 'AM'}`;
            const value = `${hour < 10 ? '0' : ''}${hour}:00`;
            times.push({ value, label });
        }

        return times;
    },

    encodeToBase64: (input: any) => {
        // Validate if the input is already a valid Base64 string
        function isBase64(str: string) {
            try {
                return btoa(atob(str)) === str;
            } catch (err) {
                return false;
            }
        }

        // If input is not a string, convert it to one
        if (typeof input !== "string") {
            input = String(input);
        }

        // Encode only if not already a valid Base64 string
        if (!isBase64(input)) {
            return btoa(input);
        }

        // Return input unchanged if it's already valid Base64
        return input;
    },

    async shareSite(title: string, text: string, url: string) {
        try {
            await navigator.share({ title, text, url })
        } catch (err) {
            console.log(err)
        }
    },


    excelDateToJSDate(serial: any) {
        const utc_days = Math.floor(serial - 25569);
        const utc_value = utc_days * 86400;
        const date_info = new Date(utc_value * 1000);

        const fractional_day = serial - Math.floor(serial) + 0.0000001;

        let total_seconds = Math.floor(86400 * fractional_day);

        const seconds = total_seconds % 60;

        total_seconds -= seconds;

        const hours = Math.floor(total_seconds / (60 * 60));
        const minutes = Math.floor(total_seconds / 60) % 60;

        return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
    },


    async downloadPDF(ref: any, fileName: string) {
        const element = ref;

        const fixedWidth = 800; // Adjust based on your content
        element.style.width = `${fixedWidth}px`;
        element.style.overflow = 'hidden';
        element.style.position = 'absolute';
        element.style.left = '0';
        element.style.top = '0';


        const canvas = await html2canvas(element, {
            scale: 2,
            width: fixedWidth,
            windowWidth: fixedWidth,
            logging: true,
            useCORS: true,
            scrollX: 0,
            scrollY: 0
        });

        // PDF settings (A4 portrait: 210mm x 297mm)
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth() - 20; // 20mm margin
        const pageHeight = pdf.internal.pageSize.getHeight() - 20;

        // Calculate scaling
        const scaleFactor = pageWidth / canvas.width;
        const imgWidth = canvas.width * scaleFactor;
        const imgHeight = canvas.height * scaleFactor;

        // Multi-page logic (from your original code)
        let heightLeft = imgHeight;
        let position = 0;

        // First page
        pdf.addImage(
            canvas.toDataURL('image/png'),
            'PNG',
            10, // Left margin
            10, // Top margin
            imgWidth,
            imgHeight
        );
        heightLeft -= pageHeight;

        // Additional pages if needed
        while (heightLeft >= 0) {
            pdf.addPage();
            position = heightLeft - imgHeight;
            pdf.addImage(
                canvas.toDataURL('image/png'),
                'PNG',
                10,
                position + 40, // Adjust for margin
                imgWidth,
                imgHeight
            );
            heightLeft -= pageHeight;
        }
        pdf.save(`${fileName}-${new Date().getTime()}.pdf`);
    },


    generateCode: (digits: number = 4, withNumbers: boolean = true, withSpecialCharacters: boolean = false) => {
        let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (withNumbers) charset += '0123456789';
        if (withSpecialCharacters) charset += '!@#$%^&*()';

        let result = '';
        for (let i = 0; i < digits; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
    }
}