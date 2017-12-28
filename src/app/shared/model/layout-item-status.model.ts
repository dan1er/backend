export class LayoutItemStatus {
    visible?: boolean;
    active?: boolean;

    constructor(data?: LayoutItemStatus) {
        this.visible = data && data.visible || false;
        this.active = data && data.active || false;
    }
}
