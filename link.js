$(document).ready(function () {
	const urlRoot =
		"https://637791a05c47776512218d3a.mockapi.io/api/userList/categoryList";
	$.get(urlRoot, function (data) {
		return renderLink(data);
	});

	function renderLink(data) {
		let html = data
			.map((a) => {
				return `<div class="col-3">
            <div class="card">
                <img src="${a.avatar}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${a.author}</h5>
                    <p class="card-text">${a.job}</p>
                    <span class="card-contact">Contact: ${a.contact}</span>
                </div>
            </div>
        </div>`;
			})
			.reverse()
			.join("");
		$(".list--address").html(html);
	}
});
