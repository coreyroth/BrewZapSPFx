export interface IBeer {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    beer_name: string;
    bid: number;
    beer_label: string;
    brewery_name: string;
    brewery_label: string;
    on_tap: boolean;
    in_bottle: boolean;
    on_deck: boolean;
    glass_price: number;
    growler_32_price: number;
    growler_64_price: number;
    glass_size: number;
    bottle_price: number;
    bottle_size: number;
    beer_abv: number;
    beer_ibu: number;
    beer_style: string;
    brewery_city: string;
    brewery_state: string;
    country_name: string;
    beer_description: string;
    send_notification: boolean;
    location_id: string;
    tenant_id: string;
    taster_price: number;
    tap_number: number;
    push_to_untappd: boolean;
    category_id: string;
}

export interface IEvent {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deleted: boolean;
    location_id: string;
    title: string;
    start_date: Date;
    end_date: Date;
    description: string;
    image_url: string;
    cost: string;
    send_notification: true;
    event_type: string;
    tenant_id: string;
    recurring_date: string;
    location: string;
    location_address: string;
    ticket_url: string;
}