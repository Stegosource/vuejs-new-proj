export const countedText = {
        computed: {
            countedText() {
                return `${this.moreText} (${this.moreText.length})`;
            }
        }
}