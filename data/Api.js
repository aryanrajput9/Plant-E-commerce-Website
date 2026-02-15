export async function getData() {
    try {
        let response = await fetch("https://corsproxy.io/?https://trefle.io/api/v1/plants?token=usr-nZzGNiLpH1qbKzAsB7l4MNtZMV4046U7gRXfFEOGqrg");

        let data = await response.json();

        return data?.data || [];

    } catch (error) {
        console.log("Error:", error);
        return [];
    }
}
