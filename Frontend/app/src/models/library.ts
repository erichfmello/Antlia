export class library {

    public isEmpityString(text?: string): boolean {
        if (text === undefined || text === null || text === '')
            return true;

        return false;
    }

    public formatMoney(text: string): string {
        var textSplit = text.split('.');
        var formatText = '';

        for (let i = 0; i < textSplit.length; i++) {
            if (i == 0)
                formatText += 'R$ '

            formatText += `${textSplit[i].replace(',', '.')}`
        }

        if (textSplit.length == 1)
            return `${formatText},00`;

        return formatText;
    }
}