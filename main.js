const urlRoot =
	"https://637791a05c47776512218d3a.mockapi.io/api/userList/categoryList";
const callAPI = () => {
	$.get(urlRoot, function (data) {
		return render(data);
	});
};
callAPI();

function render(data) {
	let html = data
		.map((a) => {
			return `<div class="col-1 border border-info text-center">${a.id}</div>
			<div class="col-2 border border-info text-center">${a.author}</div>
					<div class="col-2 border border-info text--link">${a.avatar}</div>
					<div class="col-3 border border-info">${a.job}</div>
					<div class="col-3 border border-info text--link">${a.contact}</div>
					<div class="col-1 border border-info">
					<button type="button" class="btn btn-danger w-100 mt-2" onClick="del(${a.id})">Delete</button>
					<button type="button" class="btn btn-info w-100 my-2" onClick="upd(${a.id})">Edit</button></div>`;
		})
		.reverse()
		.join("");
	$("#dashboard").html(html);
	$("#nameUser").val("");
	$("#avatar").val("");
	$("#description").val("");
	$("#contact").val("");
}

function add() {
	$.post(
		urlRoot,
		{
			author: $("#nameUser").val(),
			avatar: $("#avatar").val(),
			job: $("#description").val(),
			contact: $("#contact").val(),
		},
		function () {
			return callAPI();
		}
	);
}

function del(id) {
	$.ajax({
		url: `${urlRoot}/${id}`,
		type: "DELETE",
		dataType: "json",
		success: function () {
			return callAPI();
		},
	});
}

let z;
function upd(id) {
	z = id;
	$.get(`${urlRoot}/${id}`, function (data) {
		$("#nameUser").val(data.author);
		$("#avatar").val(data.avatar);
		$("#description").val(data.job);
		$("#contact").val(data.contact);
	});
}

function update() {
	$.ajax({
		url: `${urlRoot}/${z}`,
		type: "PUT",
		dataType: "json",
		data: {
			author: $("#nameUser").val(),
			avatar: $("#avatar").val(),
			job: $("#description").val(),
			contact: $("#contact").val(),
		},
		success: function () {
			return callAPI();
		},
	});
}
